//引入http模块
var http = require('http');

//引入扩展名的方法是在文件里面获取到的。
var router = require('./model/router.js');
//获取文件类型
//console.log(mimeModel.getMime('.css'));

http.createServer(function (req, res) {
    router.statics(req, res, 'static');
    console.log(req.url);
}).listen(8111);