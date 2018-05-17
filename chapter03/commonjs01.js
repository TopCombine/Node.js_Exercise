var http = require('http');
var config = require('./config');


http.createServer(function(req,res){

    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    console.log(config.str);
    res.end();

}).listen('8301');