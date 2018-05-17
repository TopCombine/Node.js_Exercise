
//引入http模块
var http=require('http');

//fs模块

var fs=require('fs');
http.createServer(function(req,res){
	//http://localhost:8001/news.html    /news.html
	//http://localhost:8001/index.html    /index.html

	//css/dmb.bottom.css

	var pathname=req.url;
	if(pathname=='/'){
        /*默认加载的首页*/
		pathname='/index.html';
	}

    /*过滤请求favicon.ico*/
	if(pathname!='/favicon.ico'){
		console.log(pathname);
		//文件操作获取 static下面的index.html
		fs.readFile('static/'+pathname,function(err,data){
            /*么有这个文件*/
			if(err){
				console.log('404');
			}else{
				/*返回这个文件*/
				res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
				res.write(data);
				res.end();
			}
		});
	}
}).listen(8901);
