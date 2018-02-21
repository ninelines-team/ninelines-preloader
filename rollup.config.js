import babel from 'rollup-plugin-babel';

export default [
	{
		plugins: [
			babel({
				exclude: 'node_modules/**',
			}),
		],
		input: 'src/ninelines-preloader.js',
		output: {
			file: 'dist/ninelines-preloader.es.js',
			format: 'es',
		},
	},
	{
		plugins: [
			babel({
				exclude: 'node_modules/**',
			}),
		],
		input: 'src/ninelines-preloader.js',
		output: {
			file: 'dist/ninelines-preloader.umd.js',
			format: 'umd',
			name: 'Preloader',
		},
	},
];
