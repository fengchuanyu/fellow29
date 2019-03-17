var http = require('http')
var url = require("url")
var fs = require('fs')
http.createServer(function(req,res){
  let path = url.parse(req.url).pathname;
  if(path=='/'){
    fs.readFile('./index.html','utf-8',function(err,data){
      res.writeHead(200,{'Content-Type':"text/html"})
      res.end(data)
    })
  }else if(path=='/index.css'){
    fs.readFile('./index.css','utf-8',function(err,data){
      res.writeHead(200,{'Content-Type':"text/css"})
      res.end(data)
    })
  } else{
    console.log('404');
    res.end("404")
  }
  
}).listen("3000")

console.log('服务已创建！');
