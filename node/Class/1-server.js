var http = require('http')
var url = require("url")
http.createServer(function(req,res){
  let path = url.parse(req.url).pathname;
  if(path=='/'){
    console.log('home');
    res.end("home")
  }else if(path=='/about'){
    console.log('about');
    res.end("about")
  }else if(path=='/mine'){
    console.log('mine');
    res.end("mine")
  }else{
    console.log('404');
    res.end("404")
  }
  
}).listen("3000")

console.log('服务已创建！');
