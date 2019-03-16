var http = require('http');
var fs = require('fs')
var server = http.createServer(function(req,res){
  
  fs.readFile('./test.html',function(err,filecontent){
    res.setHeader('Content-Type','text/html;charset=UTF-8')
    res.end(filecontent)
    console.log('读取成功！');
    
  })
})

server.listen('3000');
console.log('服务已运行');
