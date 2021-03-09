webpack.config.js配置如下：

let path = require('path')
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
let  VueLoaderPlugin = require("vue-loader/lib/plugin.js");
module.exports = {
    // 入口entry 出口output loader mode plugin
    // mode: "development", // 指定开发模式  development production
    entry:"./src/main.js",
    output:{
        filename: 'bundle.js',
        path: path.join(__dirname,'dist')
    },
    devtool: 'source-map', // 生成map文件便于调试
    module:{
        // rules:定义loader的打包信息
        rules:[
            // test: 指定后缀的文件
            // use: 用哪些loader进行转化。（多个从右到左开始转换）
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                use: [{
                    loader:"url-loader",
                    options:{
                        // 文件大小小于40kb => 打包成base64格式
                        // 否则把图片打包成一个二进制文件
                        // hash一个唯一的字符串，类似主键
                        limit: 8192*5, // 40kb
                        name: '[name]_[hash:5].[ext]',
                        outputPath: 'images/',
                    }
                }]
            },
            {
                test: /\.(ttf|ttf2|woff|woff2|eot|svg)$/,
                use: [{
                    loader: "url-loader"
                }]
            },
            {
                test:/\.js$/,
                // 排除那些目录不需要打包处理
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"vue3webpack5",
            template:"./public/index.html",
            favicon:'./public/favicon.ico'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            // 修正通过import vue导入的路径
            'vue': "vue/dist/vue.esm.js",
        }
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"), // 托管的静态资源目录
        compress: true, // gzip压缩
        port: 9000, // 指定端口
        open: true, // 自动打开浏览器
        hot: true, // 实现热替换
    }

}