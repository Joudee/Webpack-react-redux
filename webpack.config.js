var webpack = require('webpack')
var CleanPlugin = require('clean-webpack-plugin')
var ExtractPlugin = require('extract-text-webpack-plugin')
var path = require('path')

// plugins
plugins = [
	new webpack.HotModuleReplacementPlugin(),
	new ExtractPlugin('bundle.css'),
	new webpack.optimize.CommonsChunkPlugin({
		name: 'main',
		children: true,
		minChunks: 2
	})
]

module.exports = {
	debug: true,
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:3000',
		'webpack/hot/only-dev-server',
		'./src/client.jsx'
	],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
		}, {
			test: /\.css$/,
			loaders: [
				'style',
				'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
			]
		}, {
			test: /\.scss$/,
			loaders: ["style", "css", "sass"]
		},{
      test: /\.(ttf|eot|woff(2)?)(\?(t=)?[a-z0-9]+)?$/,
      loader: 'url?limit=50000&hash=sha512&digest=hex&name=[hash].[ext]'
    }, {
      test: /\.(svg?)(\?(t=)?[a-z0-9]+)$/,
      loader: 'url?limit=50000&hash=sha512&digest=hex&name=[hash].[ext]'
    }, {
			test: /\.svg$/,
			loader: 'svg-inline'
		}, {
			test: /\.(jpe?g|png|gif)$/i,
			loaders: [
				'file?hash=sha512&digest=hex&name=[hash].[ext]',
				'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
			]
		}, {
			test: /\.mp3$/,
			loaders: [
				'file?hash=sha512&digest=hex&name=[hash].[ext]',
			]
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		root:[
			path.resolve('./sass_modules/'),
		]
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist',
		hot: true,
		headers: {
			"Access-Control-Allow-Origin": "*"
		},
		historyApiFallback: true
	},
	plugins: plugins,
	devtool: 'eval',
}
