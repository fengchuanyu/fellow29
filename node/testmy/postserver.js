var http = require('http');
var util = require('util');
var querystring = require('querystring');

http.createServer(function (req, res) {
  var post = '';
  req.on('data', function (chunk) {
    post += chunk;
  });
  req.on('end', function () {
    post = querystring.parse(post);
    console.log(util.inspect(post));
    res.end('恭喜，你请求成功了！');
  });

}).listen(3000);