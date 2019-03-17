var events = require('events')
var emitter = new events.EventEmitter();

function foo(){
  console.log('come');
  
}

emitter.on('somenevents',foo)
emitter.removeAllListeners()

emitter.emit("somenevents")
// emitter.emit("somenevents","world")