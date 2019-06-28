import axios from 'axios';

export default {
  initState: {
    // [id]: {
    //   ...playlist
    // }
  },
  reducers: {
    set(state, payload) {
      const { playlist } = payload;
      return Object.assign({}, state, { [playlist.id]: playlist });
    },
  },
  effects: dispatch => ({
    async getDetails(id) {
      const response = await axios.get(`/playlist/detail?id=${id}`);
      dispatch.set(response.data);
    },
  }),
  selectors: state => ({
    tracks(playlistId) {
      if (state[playlistId]) {
        return state[playlistId].tracks;
      }
      return [];
    },
  }),
};
