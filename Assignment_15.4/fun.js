var images=document.getElementsByClassName("image") ;
var circles=document.getElementsByClassName("circle") ;
// console.log(images) ;
var ctr=Number(0) ;
circles[ctr].style.height='1.5rem' ;
circles[ctr].style.width='1.5rem' ;

var leftClick=document.querySelector(".left") ;
var rightClick=document.querySelector(".right") ;
var circle=document.querySelector(".circle") ;
leftClick.addEventListener('click',()=>{
    
    images[ctr].style.zIndex='1' ;
    circles[ctr].style.height='1rem' ;
circles[ctr].style.width='1rem' ;
ctr=(ctr-1) ;
    if(ctr<0)
    {
        ctr=3 ;
    }
    
        circles[ctr].style.height='1.5rem' ;
circles[ctr].style.width='1.5rem' ;
    images[ctr].style.zIndex='4' ;
})
rightClick.addEventListener('click',()=>{
    images[ctr].style.zIndex='1' ;
    circles[ctr].style.height='1rem' ;
    circles[ctr].style.width='1rem' ;
    ctr=(ctr+1)%4 ;
     circles[ctr].style.height='1.5rem' ;
circles[ctr].style.width='1.5rem' ;
    images[ctr].style.zIndex='4' ;
    console.log(ctr) ;
})