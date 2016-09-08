var path = require('path')
var webpack = require('webpack')


var plugins = [
    new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin()
]

module.exports = {
     entry: [
     	'webpack-dev-server/client?http://0.0.0.0:3000',
     	'./src/app.jsx'
     ],
     output: {
         path: __dirname + '/bin/',
         publicPath: '/',
         filename: 'bundle.js'
     },
     module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
        }, {
            test: /\.css$/,
            loaders: [
                'style',
                'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                'postcss'
            ]
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", 'postcss', "sass"]
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
     plugins: plugins,
     devServer: {
        contentBase: './bin',
        hot: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        historyApiFallback: true
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
 };