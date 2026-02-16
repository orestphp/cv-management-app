    export default {
        server: {
            host: '0.0.0.0', // Allow external access
            port: 3000,
        },
        publicRuntimeConfig: {
            apiUrl: 'http://127.0.0.1:8001',
        },
        runtimeConfig: {
            public: {
                apiBase: process.env.API_BASE_URL || 'http://web', // Change localhost to "app"
            },
        },
        head: {
            title: 'nuxt-vuetify-dashboard',
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Nuxt.js + Vuetify.js + Material Dashboard',
                },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
                },
            ],
        },
        plugins: [
            '~/plugins/axios.js',
            '~/plugins/vuetify.js',
            '~/plugins/base.js',
            '~/plugins/chartist.js',
            '~/plugins/components.js',
            { src: '~/plugins/ckeditor.js', mode: 'client' },
            // '~/plugins/request-logger.js',
            // { src: '~/plugins/vuex-persist.js', mode: 'client' } // gives Err:
        ],
        css: ['~/assets/less/main.less'],
        loading: { color: '#3B8070' },
        build: {
            extractCSS: true,
            optimization: {
                splitChunks: {
                    cacheGroups: {
                        styles: {
                            name: 'styles',
                            test: /\.(css|vue)$/,
                            chunks: 'all',
                            enforce: true,
                        },
                    },
                },
            },
            extend(config, ctx) {
                // Run ESLint on save
                if (ctx.isDev && ctx.isClient) {
                    config.module.rules.push({
                        enforce: 'pre',
                        test: /\.(js|vue)$/,
                        loader: 'eslint-loader',
                        exclude: /(node_modules)/,
                    });
                }
                if (ctx.isClient) {
                    config.devtool = 'source-map';
                }
            },
            transpile: [/^vuetify/],
            postcss: null,
        },
        buildModules: ['@nuxtjs/eslint-module'],
        modules: ['@nuxtjs/axios', '@nuxtjs/auth-next', '@nuxtjs/proxy'],
        axios: {
            credentials: true,
            proxy: true,
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN',
            baseURL: 'http://127.0.0.1:8001',
        },
        ssr: false,
        proxy: {
          // Catch ALL api and sanctum calls
          '/api/': { 
            target: 'http://web:80', 
            changeOrigin: true 
          },
          '/sanctum/': { 
            target: 'http://web:80', 
            changeOrigin: true 
          },
        },
        auth: {
            redirect: {
                login: '/auth/auth-login',  // Where to go if login is required
                logout: '/auth/auth-login', // Where to go after logout <--- CHANGE THIS
                home: '/cv-list'            // Where to go after a successful login
            },
            strategies: {
                laravelSanctum: {
                    provider: 'laravel/sanctum',
                    url: 'http://127.0.0.1:8001', 
                    endpoints: {
                    login: { url: '/api/login', method: 'post' },
                    logout: { url: '/logout', method: 'post' },
                    user: { url: '/api/user', method: 'get' },
                    },
                },
            },
        },
    };
