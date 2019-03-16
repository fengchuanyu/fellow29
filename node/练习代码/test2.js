var http = require('http');
var fs = require('fs')
var server = http.createServer(function(req,res){
  
  fs.readFile('./text.text',function(err,filecontent){
    res.setHeader('Content-Type','text/html;charset=UTF-8')
    res.end(filecontent)
  })
})

server.listen('3000');
console.log('服务已运行');
