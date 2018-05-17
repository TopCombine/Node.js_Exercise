/**
 *
 *  node.js的热部署(supervisor启动)
 *
 *  1.npm -g install supervisor
    2.supervisor app.js
 *
 */
var http = require('http');

http.createServer(function(req,res){


    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
    res.write('TestSuperVisor:'+'add');
    res.end();

}).listen('8103');



