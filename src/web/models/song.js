import axios from 'axios';

export default {
  state: { },
  reducers: {
    set(state, payload) {
      const songsInPayload = payload.data.reduce((memo, item) => Object.assign(memo, { [item.id]: item }), {});
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
