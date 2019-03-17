var util = require("util")
var obj = {
  name:"123",
  showName:function(){
    console.log(1);
  },
  obj2:{
    ager:"12"
  }
}

console.log(util.inspect(obj,true,null,true));


