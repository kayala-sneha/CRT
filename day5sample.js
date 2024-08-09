"use strict"
 let h1Ele=document.querySelector("h1");
 let h1Eles=document.querySelectorAll("h1");
 console.log(h1Eles);
 h1Ele.addEventListener("click",function(event){
    h1Ele.style.color="red";
    console.log("clicked");
 console.log(event);
 }
);