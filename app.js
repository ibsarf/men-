let openBtn= document.querySelector("#show");
let menü= document.querySelector(".menu");
let rotate_nav=document.querySelector(".content");
let show=document.querySelector(".box");

show.addEventListener("click", ()=>{
    rotate_nav.classList.toggle("rotate-nav");
    show.classList.toggle("show_btn");
    menü.classList.toggle("translate-left")
})