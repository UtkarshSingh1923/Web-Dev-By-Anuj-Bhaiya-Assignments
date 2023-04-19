var prompt=require('prompt-sync')() ;
var marks=prompt("Enter your marks") ;
if(marks>=90)
{
    console.log("GRADE-A+") ;
}
else if(marks>=80)
{
    console.log("GRADE-A") ;
}
else if(marks>=70)
{
    console.log("GRADE-B+") ;
}
else if(marks>=60)
{
    console.log("GRADE-B") ;
}
else if(marks>=50)
{
    console.log("GRADE-C+") ;
}
else if(marks>=40)
{
    console.log("GRADE-C") ;
}
else 
{
    console.log("FAIL") ;
}