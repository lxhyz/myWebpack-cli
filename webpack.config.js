let path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
var VueLoaderPlugin = require("vue-loader/lib/plugin.js");


module.exports = {
    // 入口enrty 出入output loder mode plugin
    //mode:"development",  // 指定开发模式 
    //mode:"production",  // 指定生产模式 
    entry: './src/main.js', // 入口文件
    output: {
        filename: 'bundle.js', // 打包的文件名
        path: path.join(__dirname, '/dist') // 打包的目录 必须是绝对路径
    },
    module: {
        // rules：定义loader的信息
        rules: [
            // test: 使用正则匹配后缀的文件进行处理
            // use: 用那些loader进行转换 (从右到左)
            { test: /\.css$/, use: ['style-loader', 'css-loader','postcss-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader','postcss-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'postcss-loader','sass-loader'] },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        // 文件大小小于40kb => 打包成base64格式
                        // 否则把图片打包成一个二进制文件
                        // hash就是一个唯一的字符串，类似主键
                        limit: 8192 * 5, // 40kb
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
                test: '/\.js$/',
                // 排除那些目录不需要打包处理
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            { test: /\.vue$/, use:'vue-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './public/index.html',
        title:"webpack5-vue2",  // 以src/目录下的index.html为模板打包
        favicon:"./public/favicon.ico"
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"), // 托管的静态资源目录
        compress: true, // gzip压缩
        port: 9000, // 指定端口
        open: true, // 自动打开浏览器
        hot:true,// 启用HMR-热模块替换
        // 解决开发时的跨域请求,1.nginx->处理代理 2.设置一个cors
        proxy:{ 
            '/api':{
                traget:'http://localhost:4000/',
                // 吧api重写空字符，因为真正的接口没有api三个字母
                pathRewrite: {'^/api':''},
            }
        }
    },
    devtool: 'source-map',  // 启用map，便于调试,
    resolve:{
        alias:{
            // 修正vue导的入路径
            'vue$':"vue/dist/vue.js",
            // @指向src目录
            '@': path.join(__dirname,'src'),
            //配置api目录
            '@api': path.join(__dirname,'src/api'),
            //配置util目录
            '@util': path.join(__dirname,'src/util'),
        }
    }
}