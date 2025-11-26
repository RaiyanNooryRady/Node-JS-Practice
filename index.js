const _=require('lodash');
const x='abc';
const y=123;
const z= [2,3,4,5];
console.log(_.now());
console.log(`x is string: `,_.isString(x));
console.log(`y is string: `,_.isString(y));
console.log(`Last value of array z: `, _.last(z));