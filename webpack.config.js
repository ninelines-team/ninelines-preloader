let path = require('path');

module.exports = {
	devtool: false,
	entry: {
		'ninelines-preloader': './src/ninelines-preloader.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		library: [
			'ninelines',
			'Preloader',
		],
		libraryTarget: 'umd',
		libraryExport: 'default',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
						],
					}
				},
			},
		],
	},
};
