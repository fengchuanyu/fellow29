var util = require('util')
function Foo(){
  this.name="lisi"
}
Foo.prototype.showName = function(){
  console.log('this.name');
}

// var foo2 = new Foo();
// foo2.showName();

function foo2(){

}
util.inherits(foo2,Foo);

foo2.showName();
console.log(foo2 instanceof Foo);