import axios from 'axios';

export default {
  state: {
    playlist: {
      tracks: [],
    },
  },
  reducers: {
    set(state, payload) {
      return Object.assign({}, state, payload);
    },
  },
  effects: dispatch => ({
    async getDetails(id) {
      const response = await axios.get(`/playlist/detail?id=${id}`);
      dispatch.set(response.data);
    },
  }),
  selectors: state => ({
    tracks() {
      return state.playlist.tracks;
    },
  }),
};
