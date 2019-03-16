var http = require('http');

http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write('<h1>Node.js1</h1>');
  res.end('<h1>hello world</h1>');
}).listen('3000');

console.log('HTTP server is listening at port 3000')
