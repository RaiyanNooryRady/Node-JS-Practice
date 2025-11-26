//function(exports, require, module, __filename, __dirname){
var people = ['saki', 'taki', 'baki'];
var a = 6;
function test() {
    console.log(a);
}
//console.log(module);
module.exports = {people, a, test};

//return module.exports
//}) ();



// (function(){
// console.log('this is IIFE')
// })();
//console.log(exports, require, module, __filename, __dirname);
//console.log(module);