/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
const fs = require('fs');
const path = require('path');
// const readline = require('readline');
const { request } = require('http');
const querystring = require('querystring');
const NodeID3 = require('node-id3');
const music163Request = require('NeteaseCloudMusicApi/util/request');
const search = require('NeteaseCloudMusicApi/module/search');

async function post(url, data) {
  // console.log(querystring.stringify(data));
  return new Promise((resolve, reject) => {
    // const requestFn = url.startsWith('https://') ? httpsRequest : httpRequest;
    const req = request(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest',
      },
    }, (response) => {
      // log(url, response);
      resolve(response);
    })
      .on('error', reject);
    req.write(querystring.stringify(data));
    req.end();
  });
}

async function get(url) {
  // console.log(querystring.stringify(data));
  return new Promise((resolve, reject) => {
    // const requestFn = url.startsWith('https://') ? httpsRequest : httpRequest;
    const req = request(url, {
      method: 'GET',
    }, (response) => {
      // log(url, response);
      resolve(response);
    })
      .on('error', reject);
    req.setTimeout(15 * 1000);
    req.end();
  });
}

function readAsBuffer(response) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    response
      .on('data', (chunk) => { chunks.push(Buffer.from(chunk)); })
      .on('end', () => {
        resolve(Buffer.concat(chunks));
      })
      .on('error', reject);
  });
}

async function readAsJson(response) {
  const data = await readAsBuffer(response);
  return JSON.parse(data);
}

async function readFileAsJson(filename) {
  const content = await fs.promises.readFile(filename, { encoding: 'utf-8' });
  return JSON.parse(content);
}

function sanitiseFilename(filename) {
  return filename.replace(/[/?<>\\:*|"]/, '');
}

async function downloadMetadata(track) {
  const folder = path.join(__dirname, '../metadata');
  const existingFiles = await fs.promises.readdir(folder);
  const filename = sanitiseFilename(`${track.title} - ${track.artist}.json`);
  const isExisting = existingFiles.includes(filename);
  if (isExisting) {
    return JSON.parse(await fs.promises.readFile(path.join(folder, filename), { encoding: 'utf-8' }));
  }

  console.log(`Search ${track.title} ${track.artist} ${track.album}`);

  const response = await post('http://music.ifkdy.com/', {
    input: `${track.title} ${track.artist} ${track.album}`,
    filter: 'name',
    type: 'qq',
    page: 1,
  });
  const data = await readAsJson(response);

  await fs.promises.writeFile(path.join(folder, filename), JSON.stringify(data.data));
  return data.data;
}

async function downloadSong(track, metadata) {
  const folder = path.join(__dirname, '../songs');
  const existingFiles = await fs.promises.readdir(folder);
  const filename = path.join(folder, sanitiseFilename(`${track.title} - ${track.artist}.mp3`));
  const isExisting = existingFiles.includes(path.basename(filename));
  if (isExisting) {
    return filename;
  }

  console.log(`Download ${track.title} ${track.artist}`);

  try {
    const { url } = metadata.find(m => m.url);
    const response = await get(url);
    const file = fs.createWriteStream(filename);
    response.pipe(file);
    return new Promise((resolve, reject) => {
      file.on('finish', () => {
        resolve(filename);
      })
        .on('error', reject);
    });
  } catch (error) {
    console.log(`Fail to download, delete file ${filename}`);
    await fs.promises.unlink(filename);
    throw error;
  }
}

async function fixMp3Tags(track, metadata, filename) {
  const expectedTags = { title: track.title, artist: track.artist, album: track.album };

  const { pic: picUrl } = metadata.find(m => m.pic);
  if (picUrl) {
    const response = await get(picUrl);
    const data = await readAsBuffer(response);
    expectedTags.image = {
      mime: path.extname(picUrl).substr(1),
      type: {
        id: 3,
      },
      imageBuffer: data,
    };
  }
  const currentTags = NodeID3.read(filename);
  const changedTags = Object.entries(expectedTags).reduce((memo, [tagName, tagValue]) => {
    const hasNoImage = tagName === 'image' && !currentTags[tagName];
    const otherTagsChanged = tagName !== 'image' && tagValue && currentTags[tagName] !== tagValue;
    if (hasNoImage || otherTagsChanged) {
      Object.assign(memo, { [tagName]: tagValue });
    }
    return memo;
  }, {});
  if (Object.keys(changedTags).length) {
    console.log(`Fix tags ${path.basename(filename)}`, changedTags);
    const success = NodeID3.update(changedTags, filename);
    if (!success) {
      console.log('Fail to update MP3 tags', filename);
    }
  }
}

function* uniqTracks(tracks) {
  const handledTracks = [];
  for (const track of tracks) {
    if (!handledTracks.some(handled => handled.title.toUpperCase() === track.title.toUpperCase()
     && handled.artist.toUpperCase() === track.artist.toUpperCase())) {
      yield track;
    }
    handledTracks.push({ title: track.title, artist: track.artist });
  }
}

async function run() {
  const tracks = await readFileAsJson(path.join(__dirname, './seed.json'));
  Promise.all(Array.from(uniqTracks(tracks))
    .map(async (track) => {
      const metadata = await downloadMetadata(track);
      if (metadata) {
        const filename = await downloadSong(track, metadata);
        await fixMp3Tags(track, metadata, filename);
      } else {
        console.log(`Cannot find ${track.title} ${track.artist} ${track.album}`);
      }
    }));
}

run();

// async function test() {
//   const data = await search({ keywords: '山丘' }, music163Request);
//   console.log(data);
// }

// test();

// const f = '/Users/naijialiu/myProjects/stock-eye/src/puzzles/myMusic/songs/凡人歌 - 李宗盛.mp3';
// console.log(NodeID3.read(f));
// NodeID3.update({ year: null }, f);
// console.log(NodeID3.read(f));
// fixMp3Tags({ album: { name: '男人三十' } }, f);

// async function downloadCover() {
//   const url = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000002aRnZM0garaC.jpg';
//   const response = await get(url);
//   const f = fs.createWriteStream(path.join(__dirname, './cover.jpg'));
//   response.pipe(f);
// }

// downloadCover();

// async function processLineByLine() {
//   const fileStream = fs.createReadStream(`${__dirname}/playlist`);

//   const rl = readline.createInterface({
//     input: fileStream,
//     crlfDelay: Infinity,
//   });
//   // Note: we use the crlfDelay option to recognize all instances of CR LF
//   // ('\r\n') in input.txt as a single line break.
//   songNames = [];
//   for await (const songName of rl) {
//     songNames.push(songName);
//   }

//   songNames.forEach(async (songName) => {
//     // const exist = await songExist(songName);
//     // if (exist) {
//     //   continue;
//     // }

//     // console.log(`Searching ${songName}`);
//     const response = await post('http://music.ifkdy.com/', {
//       input: songName,
//       filter: 'name',
//       type: 'qq',
//       page: 1,
//     });
//     const data = await readAsJson(response);

//     if (data.code === 200) {
//       await fs.promises.writeFile(`${__dirname}/metadata/${songName}.json`, JSON.stringify(data.data));

//       // const {
//       //   artist, songid, title, url,
//       // } = data.data[0];
//       // console.log(url);
//     }
//     // console.log(data);
//   });
// }


// async function songExist(songName) {
//   try {
//     await fs.promises.access(`${__dirname}/songs/${songName}.mp3`);
//     return true;
//   } catch {
//     return false;
//   }
// }

// // processLineByLine();

// async function downloadSongs() {
//   const metadataFolder = `${__dirname}/metadata`;
//   const metadataFiles = await fs.promises.readdir(metadataFolder);

//   const songsFolder = `${__dirname}/songs`;
//   const songFiles = await fs.promises.readdir(songsFolder);
//   for await (const metadataFile of metadataFiles) { // eslint-disable-line
//   // metadataFiles.forEach(async (metadataFile) => {
//     const mainName = path.basename(metadataFile, path.extname(metadataFile));

//     if (!songFiles.some(songFile => songFile.startsWith(mainName))) {
//       const metadata = JSON.parse(await fs.promises.readFile(path.join(metadataFolder, metadataFile), { encoding: 'utf-8' }))
//         .find(({ url }) => url);
//       const { url: songUrl, title, artist: artist } = metadata;
//       console.log(`Downloading ${mainName}\n${songUrl}`);
//       const response = await get(songUrl);
//       // console.log(response);
//       // const songData = readAsBuffer(response);
//       // await fs.promises.writeFile(, songData);

//       const songFileName = path.join(songsFolder, `${mainName}.mp3`);
//       const songFile = fs.createWriteStream(songFileName);
//       response.pipe(songFile);
//       songFile.on('finish', () => {
//         const tagWritten = NodeID3.update({ title, artist }, songFileName);
//         if (!tagWritten) {
//           console.log('MP3 tags update failed', songFileName);
//         }
//       });
//     }
//   }
// }
