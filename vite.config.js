import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';


export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        define: {
            __VUE_I18N_FULL_INSTALL__: true,
            __VUE_I18N_LEGACY_API__: false,
            __INTLIFY_PROD_DEVTOOLS__: false,
        },
        server: {
            origin: env.VITE_SERVER_ORIGIN,
            host: true,
            port: env.VITE_SERVER_PORT,
            cors: {
                origin: env.VITE_HOST_ORIGIN
            },
            hmr: {
                host: env.VITE_SERVER_HMR_HOST,
                port: env.VITE_SERVER_PORT
            }
        },
        plugins: [
            laravel({
                input: [
                    'resources/css/app.css',
                    'resources/js/app.js',
                ],
                refresh: true,
            }),
            vue(),
        ],
    }
});
