var fs = require('fs');
fs.readFile('./file/test.txt','utf-8',function(err,data){
  if(err){
    console.log(err);
    console.log('文件读取失败');
  }else{
    console.log(data);
  }
})
console.log('读取文件');
