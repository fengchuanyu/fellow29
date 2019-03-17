var http = require('http');
var fs = require('fs')
var server = http.createServer(function (req, res) {
  fs.readFile('./test.html','utf-8',function(err,data){
    res.setHeader('Content-Type', 'text/html')
    res.end(data)
    console.log('读取成功！');

  })
})
server.listen('3000');
console.log('服务已运行');