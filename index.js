//............Lodash Node module........

//const _ = require("lodash");
// const x = "abc";
// const y = 123;
// const z = [2, 3, 4, 5];
//console.log(_.now());
// console.log(`x is string: `, _.isString(x));
// console.log(`y is string: `, _.isString(y));
// console.log(`Last value of array z: `, _.last(z));

//...........setTimeout Function..........

// setTimeout(()=>{
//     console.log('test');
// },1000)

//.....................global............

//console.log(global); 
// console.log(__dirname)
//console.log(__filename)

//..........How to import internal js files...........

//const people= require('./test/people');
//console.log(people.test())
// console.log(people.a);
// people.test();
// console.log(`people:`, people.people);
// console.log('hello')
//console.log('people last element:', _.last(people.people));


//.......path module....

// const path = require('path');
// const myPath= '/Users/raiyannooryrady/JS-Practice/index.js';
// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(path.parse(myPath));


//...........os module..........

// const os = require('os');
// console.log(os.platform())
// console.log(os.homedir())
// console.log(os.arch());
// console.log(os.type());
// console.log(os.release())
// console.log(os.cpus());



//.........File write Synchronous...........
const fs = require('fs');
fs.writeFileSync('myFile.txt','Hello broooooo.');
fs.appendFileSync('myFile.txt',' How are youuuu?');



//........File write Asynchronous........ (to do)
// fs.writeFile('yourFile.txt','Hello broooooo22222.');
// fs.appendFile('yourFile.txt',' How are youuuu2222?');

//...........File read Synchronous...........
// const data= fs.readFileSync('myFile.txt');


//...........File Read Asynchronous........
const data= fs.readFile('myFile.txt', (err,data)=>{
    if(err)console.log(err);
    else {
        console.log(data.toString());
        fs.writeFileSync('myFile2.txt',data);
    }
});

//it will be printed first
console.log('hello')
