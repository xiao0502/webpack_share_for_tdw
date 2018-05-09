const path = require('path'); // node自带的库

module.exports = {
	entry: './src/main.js', // webpack打包的入口文件
	output: {
		path: path.resolve(__dirname,'dist'), // 打包后的出口文件夹（绝对地址）
		filename: "bundle.js" // 打包后输出文件的文件名
	}
}