const prompt=require("prompt-sync")({sigint:true});

let a=prompt("enter two numbers to perform calculations:") ;
const arr=a.split(" ") ;
let operation=prompt("choose the operation to be performed(+,-,/,*)") ;
switch(operation){
    case '+':{
        console.log(arr[0]+arr[1]) ;
        break ;
    }
    case '-':{
        console.log(arr[0]-arr[1]) ;
        break ;
    }
    case '*':{
        console.log(arr[0]*arr[1]) ;
        break ;
    }
    case '/':{
        console.log(arr[0]/arr[1]) ;
        break ;
    }
    default:{
        console.log("please enter a valid operation") ;
    }
}