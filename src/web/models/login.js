import axios from 'axios';

export default {
  state: {
    account: null,
    bindings: null,
    profile: null,
  },
  reducers: {
    set(state, payload) {
      return Object.assign({}, state, payload);
    },
  },
  effects: () => ({
    async login(payload) {
      const response = await axios.post('/login', payload);
      this.set(response.data);
    },

    async status() {
      const response = await axios.get('/login/status');
      this.set(response.data);
    },
  }),
};
