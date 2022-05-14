const esbuild = require('esbuild');
const path = require('path');
const args = require('args-parser')(process.argv);

const isDev = process.env.NODE_ENV !== 'production';
const watch = Boolean(args.watch);

(async () => {
	esbuild
		.build({
			outdir: isDev
				? path.resolve(__dirname, 'assets', 'js')
				: path.resolve(__dirname, 'dist'),
			entryPoints: [
				path.resolve(__dirname, 'src', 'home.js'),
			],
			minify: !isDev,
			watch: watch,
			sourcemap: isDev ? 'inline' : 'linked',
			bundle: true,
			loader: {
				'.js': 'jsx',
			},
		})
		.catch(err => {
			console.error(err);
			process.exit(1);
		});
})();
