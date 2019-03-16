var http = require('http');
var server = http.createServer(function(req,res){
  res.setHeader('Content-Type','text/html;charset=UTF-8')
  res.end('<h1>hello</h1>')
})

server.listen('3000');
console.log('服务已运行');
