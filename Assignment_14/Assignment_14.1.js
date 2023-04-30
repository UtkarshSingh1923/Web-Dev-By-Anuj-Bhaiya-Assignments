const prompt=require("prompt-sync")({sigint:true});

let str=prompt("Enter a String:") ;
let a=0 ;
let b=str.length-1 ;
let flag=1 ;
while(a<b)
{
    if(str[a]!=str[b])
    {
        flag=0 ;
        break ;
    }
    a++ ;
    b-- ;
}
if(flag)
{
    console.log("Pallindrome") ;
}
else
{
    console.log("Not a Pallindrome") ;
}