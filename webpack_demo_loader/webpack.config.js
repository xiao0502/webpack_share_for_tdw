const path = require('path'); // node自带的库

module.exports = {
	entry: './src/main.js', // webpack打包的入口文件
	output: {
		path: path.resolve(__dirname,'dist'), // 打包后的出口文件夹（绝对地址）
		filename: "bundle.js", // 打包后输出文件的文件名
		publicPath: "dist/"
	},
	module: {
		rules: [
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
				loader: ['style-loader','css-loader','less-loader']
			}
		]
	}
}