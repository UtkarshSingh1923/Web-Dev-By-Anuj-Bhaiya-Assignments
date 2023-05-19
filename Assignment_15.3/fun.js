const buttons = document.querySelectorAll('.box');
const screen=document.querySelector('.boxscreen') ;
var first_num=0 ;
var sec_num=0 ;
var flag=0 ;
var pos=0 ;
buttons.forEach((button,i,r )=>{
    button.addEventListener('click',()=>{
        var text=screen.textContent ;
        if(button.innerHTML=='←')
        {
            text=text.slice(0,-1) ;
            if(text=='')
            {
                text=0 ;
            }
            screen.innerHTML="<h1>"+text+"</h1>" ;
        }
        else if(button.innerHTML=='C')
        {
            screen.innerHTML="<h1>"+0+"</h1>" ;
            
        }        
        else if(text =='0')
        {
            screen.innerHTML="<h1>"+button.innerHTML+"</h1>" ;
        }
        else{
            var temp=screen.textContent ;
            screen.innerHTML="<h1>"+temp+button.innerHTML+"</h1>" ;
        }
        if(button.innerHTML=='=')
        {
            sec_num=screen.textContent ;
            sec_num=sec_num.slice(pos,-1) ;
            sec_num=Number(sec_num) ;
            console.log(first_num,sec_num) ;
            if(flag==1)
            {
                var ans=first_num+sec_num ;
                console.log(ans) ;
                screen.innerHTML="<h1>"+ans+"</h1>" ;
            }else if(flag==2)
            {
                var ans=first_num-sec_num ;
                console.log(ans) ;
                screen.innerHTML="<h1>"+ans+"</h1>" ;
            }
            else if(flag==3)
            {
                var ans=(first_num)*(sec_num) ;
                console.log(ans) ;
                screen.innerHTML="<h1>"+ans+"</h1>" ;
            }
            else{
                var ans=first_num/sec_num ;
                console.log(ans) ;
                screen.innerHTML="<h1>"+ans+"</h1>" ;
            }
        }
        if(button.innerHTML=='+'||button.innerHTML=='-'||button.innerHTML=='x'||button.innerHTML=='÷')
        {
            if(button.innerHTML=='+')
            {
                flag=1 ;
            }
            else if(button.innerHTML=='-')
            {
                flag=2 ;
            }
            else if(button.innerHTML=='x')
            {
                flag=3 ;
            }
            else
            {
                flag=4 ;
            }
            first_num=screen.textContent ;
            pos=first_num.length ;
            first_num=first_num.slice(0,-1) ;
            
            console.log(pos) ;
            first_num=Number(first_num) ;
            
        }
    })
});
