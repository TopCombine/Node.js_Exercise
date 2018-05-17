var http = require('http');
var url=require('url');

http.createServer(function(req,res){

    console.log(req.url);

    if(req.url!='/favicon.ico'){
        console.log(req.url);

        var result = url.parse(req.url,true);
        console.log(result.query.aid);  //
    }

    res.end();
}).listen(8102);