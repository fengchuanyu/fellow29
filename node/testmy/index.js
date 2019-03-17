// function Foo(){
//   this.a = 10;
//   this.showInfo = function(){
//     console.log(this.a);
//   }
// }
// module.exports = Foo;
var events = require('events');
var emitter = new events.EventEmitter();
// emitter.on('someEvent', function(arg1, arg2) { 
//   console.log('listener1', arg1, arg2);
// });
function foo(arg1, arg2) { 
  console.log('listener2', arg1, arg2);
}
emitter.on('someEvent', foo);
emitter.emit('error');
// emitter.removeListener('someEvent', foo);
emitter.removeAllListeners('someEvent')
emitter.emit('someEvent', 'byvoid', 1991);