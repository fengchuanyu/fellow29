var aa = require('./global2')
// console.log(global.b);

// console.log(aa);
// global.console.log(process.argv);


// process.stdout.write('123') 

setTimeout(function(){
  console.log('hello');
},0)
process.nextTick(function(){
  console.log('123');
})
console.log('abc');
