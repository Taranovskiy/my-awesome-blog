export default function({ $axios, redirect, store }) {
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
