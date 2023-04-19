var prompt = require('prompt-sync')();

let marks=prompt("Enter the marks");
marks=marks.split(" ");

let n=marks.length ;
let total_marks=0 ; 
// console.log(n) ;
for(let i=0;i<n;i++)
{
    total_marks+=Number(marks[i]) ;
}
// console.log(total_marks) ;
console.log(total_marks/n) ;