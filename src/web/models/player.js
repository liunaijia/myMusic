export default {
  state: null, // song id in play
  reducers: {
    set(state, payload) {
      return payload;
    },
  },
  effects: dispatch => ({
    play(id) {
      dispatch.set(id);
    },
  }),
  selectors: state => ({
    get() {
      return state;
    },
  }),
};
