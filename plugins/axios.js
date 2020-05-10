export default function({ $axios, redirect, store }) {
  $axios.interceptors.request.use((request) => {
    if (
      store.getters['auth/isAuthenticated'] &&
      !request.headers.common.Authorization
    ) {
      const token = store.getters['auth/token'];
      request.headers.common.Authorization = `Bearer ${token}`;
    }
    return request;
  });

  $axios.onError((error) => {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        redirect('/admin/login?message=session');
        store.dispatch('auth/logout');
      }

      if (status === 500) {
        window.console.error('Server 500 error');
      }
    }
  });
}
