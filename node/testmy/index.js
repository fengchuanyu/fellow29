function Foo(){
  this.a = 10;
  this.showInfo = function(){
    console.log(this.a);
  }
}
module.exports = Foo;