"use strict";
let again=document.querySelector(".btn again");
let number=document.querySelector(".number");
let guess=document.querySelector(".guess");
let check=document.querySelector(".check");
let msg=document.querySelector(".message");
let score=document.querySelector(".score");
let hscore=document.querySelector(".highscore");
let body=document.querySelector("body");
let secret=Math.random();
let hscoreValue=0;
let scoreValue=20;
secret=secret*20+1;
secret=Math.floor(secret);
console.log(secret);
check.addEventListener("click",
    function(event){
        let guessNum=Number.parseInt(guess.value);
        if(guessNum === secret)
        {
            body.style.backgroundColor='green';
            number.textContent=secret;
            if(hscoreValue<scoreValue)
            {
                hscoreValue=scoreValue;
                hscore.textContent=hscoreValue;
            }
            msg.textContent='correct Number!!';
        }
        
    }
)

