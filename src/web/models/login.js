import axios from 'axios';

export default {
  state: {
    account: null,
    bindings: null,
    profile: null,
  },
  reducers: {
    // handle state changes with pure functions
    // increment(state, payload) {
    //   return state + payload;
    // },
    set(state, payload) {
      return Object.assign({}, state, payload);
    },
  },
  effects: dispatch => ({
    async login(email, password) {
      const response = await axios.post('/login', { email, password });
      dispatch.set(response.data);
    },

    async status() {
      const response = await axios.get('/login/status');
      dispatch.set(response.data);
    },
  }),
  selectors: state => ({
    hasSessionInCookie() {
      return document.cookie;
    },

    isLoggedIn() {
      console.log('isLoggedIn', state.profile);
      return state.profile !== null;
    },

    profile() {
      return state.profile;
    },
  }),
};
