var http = require('http');
var tool = require('./tools');

http.createServer(function(req,res){

    console.log(req.url);
    console.log(tool.toolAlias.add(1,2));
    console.log(tool.toolAlias.sayHello());
    res.end();

}).listen('8302');