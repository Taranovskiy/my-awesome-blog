export const state = () => ({
  token: true,
});

export const getters = {
  isAuthenticated: (state) => Boolean(state.token),
};

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state) {
    state.token = null;
  },
};

export const actions = {
  async login({ commit, dispatch }, formData) {
    try {
      const token = await new Promise((resolve) => {
        setTimeout(() => {
          resolve('mock-token');
        }, 1000);
      });
      dispatch('setToken', token);
    } catch (error) {
      commit('setError', error, { root: true });
      throw error;
    }
  },
  async createUser({ commit }, formData) {
    try {
      await console.log('formData -->', formData);
    } catch (error) {}
  },
  setToken({ commit }, token) {
    commit('setToken', token);
  },
  logout({ commit }) {
    commit('clearToken');
  },
};
