var http = require('http');
var querystring = require('querystring');
var contents = querystring.stringify({
  name: 'byvoid',
  email: 'byvoid@byvoid.com',
  address: 'Zijing 2#, Tsinghua University',
});
var options = {
  host: 'localhost',
  path: '/',
  port:3000,
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': contents.length
  }
};
var req = http.request(options, function (res) {
  res.setEncoding('utf8');
  res.on('data', function (data) {
    console.log(data);
  });
});
req.write(contents);
req.end();