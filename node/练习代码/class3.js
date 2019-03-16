//dep.js
export foo function(){}
export const bar = 'a'

//app.js
import { foo, bar } from 'dep'
console.log(bar)
foo()