export const state = () => ({
  token: null,
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
      const { token } = await this.$axios.$post(
        '/api/auth/admin/login',
        formData
      );
      dispatch('setToken', token);
    } catch (error) {
      commit('setError', error, { root: true });
      throw error;
    }
  },
  async createUser({ commit }, formData) {
    try {
      await this.$axios.$post('/api/auth/admin/create', formData);
    } catch (error) {
      commit('setError', error, { root: true });
      throw error;
    }
  },
  setToken({ commit }, token) {
    commit('setToken', token);
  },
  logout({ commit }) {
    commit('clearToken');
  },
};
