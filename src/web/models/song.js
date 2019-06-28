import axios from 'axios';

function convertUrl(item) {
  const url = (item.url || '').replace('m10.music.126', 'm10c.music.126');
  return Object.assign({}, item, { url });
}

export default {
  initState: {
    // [id]: {
    //   ...song
    // }
  },
  reducers: {
    set(state, payload) {
      const songsInPayload = payload.data.reduce((memo, item) => Object.assign(memo, { [item.id]: convertUrl(item) }), {});
      return Object.assign({}, state, songsInPayload);
    },
  },
  effects: dispatch => ({
    async getUrl(...ids) {
      const response = await axios.get(`/song/url?id=${ids.join(',')}`);
      dispatch.set(response.data);
    },
  }),
  selectors: state => ({
    get(id) {
      return state[id];
    },
  }),
};
