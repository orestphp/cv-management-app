export default function ({ $axios }) {
    $axios.defaults.withCredentials = true;
    $axios.setHeader('X-Requested-With', 'XMLHttpRequest');
}
