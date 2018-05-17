var http = require('http');
var tools2 = require('./tools2');

http.createServer(function(req,res){

    console.log(tools2.add(1,2));
    res.end();

}).listen('8303');