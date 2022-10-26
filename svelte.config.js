import adapter from '@sveltejs/adapter-static';
import {mdsvex} from 'mdsvex';

const dev = true;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md', '.svx'],
			layout: {
				week: './src/routes/week_layout.svelte',
				_: 'src/routes/week_layout.svelte',
			}
		})
	],
	kit: {
		adapter: adapter({ 
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		paths: { base: dev ? "" : "/classes/MAS.863/EECS/people/Richard" },
		trailingSlash: 'always',
	}
};

export default config;
