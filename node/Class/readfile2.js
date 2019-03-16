var fs = require('fs');
var data = fs.readFileSync('./file/test.txt','utf-8')
console.log(data);
console.log('读取文件');
