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
    setUser(state, payload) {
      return Object.assign({}, state, payload);
    },
  },
  effects: dispatch => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async login(email, password) {
      const response = await axios.post('/login', { email, password });
      dispatch.setUser(response.data);
    },
  }),
  selectors: state => ({
    isLoggedIn() {
      console.log('isLoggedIn', state.profile);
      return state.profile !== null;
    },
  }),
};
