var http = require('http'); 
var url = require('url'); 
var util = require('util');
var fs = require('fs');

http.createServer(function(req, res) { 
  // res.writeHead(200, {'Content-Type': 'text/html'}); 
  console.log(req.url);
  console.log(__filename)
  if(req.url=="/"){
    fs.readFile(`${__dirname}/test.html`,'utf-8',function(err,data){
      res.end(data)
    })
  }else if(req.url=="/test.css"){
    fs.readFile(`${__dirname}/test.css`,'utf-8',function(err,data){
      res.end(data) 
    })
  }else if(req.url!='/favicon.ico'){
    res.end("404")
  }
  
  // res.write(fsdata);
  // res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);