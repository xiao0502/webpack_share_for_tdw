const path = require('path'); // node自带的库
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 提取css为单独文件
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清楚打包的入口旧文件
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html手动添加静态资源

const VENDOR = ["vue"]

module.exports = {
	entry: {
		bundle: './src/main.js',
		vendor: VENDOR
	}, // webpack打包的入口文件，多个入口一个是我们自己的代码，一个是依赖库的代码
	output: {
		path: path.resolve(__dirname, 'dist'), // 打包后的出口文件夹（绝对地址）
		filename: "static/js/[name].[chunkhash].js", // 打包后输出文件的文件名
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: '/\.js$/',
				use: "babel-loader", // 多个用字符串数组
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				loader: "url-loader", // 多个用字符串数组
				options: {
					limit: 10000,
					name: 'static/img/[name].[ext]?t=' + new Date().getTime()
				}
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						'less-loader'
					]
				})
			}
		]
	},
	// 插件列表
	plugins: [
		// 抽离css至单独文件
		new ExtractTextPlugin('static/css/[name].[hash].css'),

		// vendor 是代表一些不需要经常变动的东西，比如依赖或者缓存
		// manifest清单是将每次打包都会更改的东西单独提取出来，加快打包速度
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest'],
			minChunks: Infinity
		}),

		// 删除dist文件夹下面的bundle和manifest文件
		new CleanWebpackPlugin(['dist/static/js/bundle.*.js','dist/static/js/manifest.*.js'], {
			verbose: true, // 打印log
			dry: false // 删除文件
		}),

		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		})
	],
	devServer: {
		//设置基本目录结构
		contentBase: path.resolve(__dirname, 'dist'),
		//服务器的IP地址，可以使用IP也可以使用localhost
		host: 'localhost',
		//服务端压缩是否开启
		compress: true,
		//配置服务端口号
		port: 2222
	}
};