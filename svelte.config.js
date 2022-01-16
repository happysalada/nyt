import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.md'],
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    sveltePreprocess({
      postcss: true,
    }),
  ],
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: adapter({
      precompress: true  
    }),
    files: {
			assets: 'static',
    },
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
  },
}

export default config