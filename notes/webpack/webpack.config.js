// webpack 是node写出来的node的写法
const path = require('path');

module.exports = {
  entry: './src/index.js',   // 入口, 可以是相对路径
  output: {
    filename: 'bundle.js',   // 打包后的文件名
    path: path.resolve(__dirname, 'dist')     // 打包后文件的输出目录, 单前目录下的dist文件夹
  } 
}