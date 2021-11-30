const path = require('path');

module.exports = {
	entry: {
		home: path.resolve(__dirname, 'src', 'home.js'),
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jp(e*)g|svg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[hash].[ext]',
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.jsx', '.js'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
};
