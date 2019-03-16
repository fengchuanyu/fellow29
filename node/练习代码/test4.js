var http = require('http');
var server = http.createServer(function(req,res){
  console.log(req.url);
  
    res.setHeader('Content-Type','text/html;charset=UTF-8')
    if(req.url=="/"){
      res.write("hhahah")
      res.end('首页')
    }else if(req.url=="/movie"){
      res.end('电影')
    }else if(req.url=="/music"){
      res.end('音乐')
    }else if(req.url=="/talk"){
      res.end('聊天')
    }else if(req.url!='favicon.icn'){
      res.end('404')
    }
    
    
})

server.listen('3000');
console.log('服务已运行');
