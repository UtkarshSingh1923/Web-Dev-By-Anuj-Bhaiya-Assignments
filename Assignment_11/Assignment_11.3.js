const prompt=require('prompt-sync')() ;
var weight=prompt("Enter your weight(in Kg):") ;
var height=prompt("Enter your height(in m)") ;
console.log(weight/(height**2)) ;