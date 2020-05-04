export const state = () => ({
  error: null,
});

export const getters = {
  error: (state) => state.error,
};

export const mutations = {
  setError(state, error) {
    state.error = error.message;
  },
  clearError(state) {
    state.error = null;
  },
};
