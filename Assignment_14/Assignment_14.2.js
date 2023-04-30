const prompt = require("prompt-sync")();
let str=prompt("Enter a string") ;
let arr=str.split('').sort().join('') ;
console.log(arr) ;