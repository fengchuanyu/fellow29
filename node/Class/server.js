var http = require('http')
http.createServer(function(req,res){
  res.write('<h1>node.js</h1>');
  res.end('hello world12345');
}).listen("3000")
console.log('服务运营在3000端口');
