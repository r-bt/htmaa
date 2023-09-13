import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';

/** @type {import('vite').UserConfig} */
const config = {
	base: "/classes/863.22/EECS/people/Richard/",
	plugins: [
		imagetools(),
		sveltekit(), 
	]
};

export default config;
