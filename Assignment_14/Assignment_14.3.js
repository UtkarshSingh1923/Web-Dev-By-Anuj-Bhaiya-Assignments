const prompt=require("prompt-sync")()
let arr=prompt("enter the elements of array space seperated") ;
arr=arr.split(" ");
let a=0 ;
for(let i=0;i<arr.length;i++)
{
    a+=Number(arr[i]) ;

} 
console.log(a/arr.length) ;