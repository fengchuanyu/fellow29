var http = require('http'); 
var url = require('url'); 
var util = require('util');

http.createServer(function(req, res) { 
  res.writeHead(200, {'Content-Type': 'text/plain'}); 
  res.end('恭喜，你请求成功了！');
}).listen(3000);