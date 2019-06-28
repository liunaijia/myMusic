import axios from 'axios';

export default {
  initState: {
    code: null,
    more: null,
    playlist: [],
  },
  reducers: {
    set(state, payload) {
      return Object.assign({}, state, payload);
    },
  },
  effects: dispatch => ({
    async getPlaylist(userId) {
      const response = await axios.get(`/user/playlist?uid=${userId}`);
      dispatch.set(response.data);
    },
  }),
  selectors: state => ({
    playlist() {
      return state.playlist;
    },
  }),
};
