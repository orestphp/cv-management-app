export default function ({ $axios, $auth, redirect }) {
  // 1. This is the ONLY line needed for cookies to work
  $axios.defaults.withCredentials = true;
  $axios.setHeader('X-Requested-With', 'XMLHttpRequest');

  // 2. Clear the error handling so it doesn't crash on undefined logout
  // $axios.onError((error) => {
  //   if (error.response && error.response.status === 401) {
  //     if ($auth && $auth.user) {
  //        $auth.logout();
  //     }
  //     return redirect('/auth/auth-login');
  //   }
  // });

  console.log($auth);
  return redirect('/cv-luist');
}