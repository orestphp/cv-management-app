export default function ({ $auth, redirect, route }) {
    const isLoginPage = route.path === '/auth/auth-login';

    // якщо auth ще не завантажився — не редіректимо одразу
    if ($auth && $auth.loggedIn === false) {
        if (!isLoginPage) {
            return redirect('/auth/auth-login');
        }
    }

    if ($auth && $auth.loggedIn === true) {
        if (isLoginPage) {
            return redirect('/cv-list');
        }
    }
}
