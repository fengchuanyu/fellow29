var http = require('http');
http.get({
  host: 'localhost',
  port:3000
}, function (res) {
  res.setEncoding('utf8');
  res.on('data', function (data) {
    console.log(data);
  });
});