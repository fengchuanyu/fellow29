var http = require('http');
var a = 10
var server = http.createServer(function(req,res){
  a++
  res.setHeader('Content-Type','text/html;charset=UTF-8')
  res.end(a.toString()+req.connection.remoteAddress)
  if(a==10)
  throw new Error('错误'+req.connection.remoteAddress)
})

server.listen('3000');
console.log('服务已运行');
