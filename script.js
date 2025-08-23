let items = document.querySelector(".hamburger-items")
clickCount = 0 ; 
let menu_button = document.querySelector(".hamburger-menu");
menu_button.addEventListener('click' , () =>{
    if(clickCount<1){
        items.style.transform =  'translateX(0vw)';
        document.getElementById("menu-icon").classList.remove("fa-bars");
        document.getElementById("menu-icon").classList.add("fa-circle-xmark");
        clickCount++;
    }
    else{
        items.style.transform =  'translateX(-90vw)';
        document.getElementById("menu-icon").classList.remove("fa-circle-xmark");
        document.getElementById("menu-icon").classList.add("fa-bars");
        clickCount=0;
    }
})

addEventListener("resize" , ()=>{
    if(innerWidth>1000)
    {
        items.style.transform =  'translateX(-90vw)';
        document.getElementById("menu-icon").classList.add("fa-bars");
        document.getElementById("menu-icon").classList.remove("fa-circle-xmark");
        clickCount=0;
    }
})


