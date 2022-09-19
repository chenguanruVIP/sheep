import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/sheep-game',
	plugins: [vue()],
	build: {
		outDir: 'docs'
	},
	// 本地反向代理解决浏览器跨域限制
	server: {
		host: '0.0.0.0',
		port: 6600,
		open: true, // 运行自动打开浏览器
		proxy: {
			['/api']: {
				target: 'https://cat-match.easygame2021.com',
				changeOrigin: true,
				rewrite: path =>
					path.replace(new RegExp('^' + '/api'), '')
			}
		}
	},
	resolve: {
		// Vite路径别名配置
		alias: {
			'@': path.resolve('./src')
		}
	}
});
