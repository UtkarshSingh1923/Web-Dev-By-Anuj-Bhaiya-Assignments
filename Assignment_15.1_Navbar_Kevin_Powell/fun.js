let navbar=document.querySelector('header') ;
window.addEventListener('scroll',()=>{
    let yscroll=window.scrollY;
    if(yscroll>200)
    {
        navbar.style.backgroundColor='skyblue' ;
    }
    else
    {
        navbar.style.backgroundColor='rgba(0, 214, 170, .85) ' ;
    }
})