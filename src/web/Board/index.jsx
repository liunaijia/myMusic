import React from 'react';
import {
  Avatar, Track, Icon, Typography,
} from '../components';
import TypographyBoard from './TypographyBoard';
import BoxBoard from './BoxBoard';
import GridBoard from './GridBoard';

function Board() {
  return (
    <>

      <BoxBoard />

      <Typography scale="h2">Grid</Typography>
      <GridBoard />

      <Typography scale="h2">Typography</Typography>
      <TypographyBoard />

      <h2>Colors</h2>
      <ul>
        <li style={{ color: 'var(--primary-color)' }}>Primary Color</li>
        <li style={{ color: 'var(--secondary-color)' }}>Secondary Color</li>
      </ul>

      <h2>Icon Button</h2>
      <Icon>play_arrow</Icon>

      <h2>Avatar</h2>
      <Avatar src="https://66.media.tumblr.com/78d9f5cc68beb1e6d49fc8a0bfa375ce/tumblr_pszj0804ub1qf8em3o3_1280.jpg" />
      <Avatar src="https://66.media.tumblr.com/68b823d03f44417adaf7380a7814c07e/tumblr_pszj0804ub1qf8em3o8_1280.jpg" />
      <Avatar src="https://66.media.tumblr.com/a7e54973ca6f1d7a2fbf2790270693ce/tumblr_pszj0804ub1qf8em3o2_1280.jpg" />
      <Avatar src="https://66.media.tumblr.com/1b729f82020586589ded089d7f0ae91c/tumblr_pszj0804ub1qf8em3o1_1280.jpg" />

      <h2>Track</h2>
      {/* <Track id={28793502} name="后会无期" artist="G.E.M.邓紫棋" album={{ name: '后会无期', picUrl: 'http://p1.music.126.net/vpvPajo3kn88nHc7jUjeWQ==/5974746185758035.jpg' }} /> */}

      {/* <ButtonBoard /> */}
    </>

  );
}

export default Board;
