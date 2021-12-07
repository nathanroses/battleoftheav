const e = require("express");

const char1Vote = document.getElementById("character-1-score");
const char2Vote = document.getElementById("character-2-score");


function newVote(){
    
}

function upVote(){
    if (char1Vote.clicked == true){
        char1Vote.addEventListener("click", newVote);
    }
    if (char2Vote.clicked == true){
        char2Vote.addEventListener("click", newVote);
    }
}