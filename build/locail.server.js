let express = require('express');
let path = require('path')
let open = require('open')
let app = express();

// 托管静态资源目录 dist/

app.use(express.static(path.join(__dirname,'../dist')))
// console.log(path.join(__dirname,'../'))  // E:\2001授课\day91\student1-vue\

const port = 8081;

app.listen(port, ()=> {
    // 启动完毕之后，打开服务器
    open("http://localhost:" +port)
    console.log('静态资源服务器已经打开')
})