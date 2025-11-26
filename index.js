const _ = require("lodash");
// const x = "abc";
// const y = 123;
// const z = [2, 3, 4, 5];
//console.log(_.now());
// console.log(`x is string: `, _.isString(x));
// console.log(`y is string: `, _.isString(y));
// console.log(`Last value of array z: `, _.last(z));
// setTimeout(()=>{
//     console.log('test');
// },1000)
//console.log(global); 
// console.log(__dirname)
//console.log(__filename)
const people= require('./test/people');
//console.log(people.test())
// console.log(people.a);
// people.test();
// console.log(`people:`, people.people);
// console.log('hello')
console.log('people last element:', _.last(people.people));