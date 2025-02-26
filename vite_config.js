export default {
    server: {
        proxy: {
            '/api': {
                target: 'https://egynaposfestes.hu',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
}
