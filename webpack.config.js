const path = require('path');
var libraryName = 'covidjs';

module.exports = {
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	mode: "development",
	output: {
		filename: 'covidjs.bundle.js',
		library: libraryName,
		libraryTarget: 'umd',
		umdNamedDefine: true,
		path: path.resolve(__dirname, 'build/dist'),
	},
};