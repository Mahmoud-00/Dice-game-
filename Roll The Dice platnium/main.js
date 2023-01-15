let images = ["dice-01.svg",
"dice-02.svg",
"dice-03.svg",
"dice-04.svg",
"dice-05.svg",
"dice-06.svg"];
let dice = document.querySelectorAll("img");

let player1cpoints = 0;
let player1tpoints = 0;
let player2cpoints = 0;
let player2tpoints = 0;
var current_player = 1;
document.getElementById("ROLLTHEDICE").addEventListener("click", roll);

function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });

    setTimeout(function () {
        dice.forEach(function (die) {
            die.classList.remove("shake");
            
        });
        var dieValue = Math.round(Math.random() * 5) + 1;
            console.log(dieValue);
        document.querySelector("#die-1").setAttribute("src", images[dieValue - 1])
        document.querySelector("#total").innerHTML = `Your roll is  ${dieValue} `;
        
        if (current_player == 1) {
            if (dieValue == 1) {
                player1cpoints = 0;
                player1tpoints = 0;
                current_player = 2;
                document.getElementById("winner2").style.display = "block";
                    
            } else {
                player1cpoints = dieValue;
                player1tpoints += dieValue;
            }
            document.querySelector("#player1-current-score").innerHTML = player1cpoints;
            document.querySelector("#player1-total-score").innerHTML = player1tpoints;
            if (player1tpoints >= 30) {
    var tada = new Audio();
    tada.src = 'winner.mp3';
    tada.play();

                document.getElementById("winner1").style.display = "block";
                document.getElementById("ROLLTHEDICE").style.display = "none";
                
                player1cpoints = 0;
                player1tpoints = 0;
                player2cpoints = 0;
                player2tpoints = 0;
                current_player = 1;
                document.querySelector("#player1-current-score").innerHTML = 0;
                document.querySelector("#player1-total-score").innerHTML = 0;
                document.querySelector("#player2-current-score").innerHTML = 0;
                document.querySelector("#player2-total-score").innerHTML = 0;
        
            } else {
                document.querySelector("#player1-total-score").innerHTML = player1tpoints;
            }
            
        } else if(current_player == 2) {
            if (dieValue == 1) {
                player2cpoints = 0;
                player2tpoints = 0;
                current_player = 1;
                    
            } else {
                player2cpoints = dieValue;
                player2tpoints += dieValue;
            }
            document.querySelector("#player2-current-score").innerHTML = player2cpoints;
            document.querySelector("#player2-total-score").innerHTML = player2tpoints;
            if (player2tpoints >= 30) {
                var tada = new Audio();
    tada.src = 'winner.mp3';
    tada.play();
                document.getElementById("winner2").style.display = "block";
                document.getElementById("ROLLTHEDICE").style.display = "none";
                
                player1cpoints = 0;
                player1tpoints = 0;
                player2cpoints = 0;
                player2tpoints = 0;
                current_player = 1;
                document.querySelector("#player1-current-score").innerHTML = 0;
                document.querySelector("#player1-total-score").innerHTML = 0;
                document.querySelector("#player2-current-score").innerHTML = 0;
                document.querySelector("#player2-total-score").innerHTML = 0;
        
            } else {
                document.querySelector("#player2-total-score").innerHTML = player2tpoints;
            
        }  
        
        }
    }, 2000);
};
let hold1= document.getElementById("player1-hold");
            hold1.onclick = function (){
            current_player = 2;
        };
        let hold2= document.getElementById("player2-hold");
            hold2.onclick = function (){
            current_player = 1;
        
        };
    let newgame= document.getElementById("NEWGAME");
NEWGAME.onclick = function (){
        player1cpoints = 0;
        player1tpoints = 0;
        player2cpoints = 0;
        player2tpoints = 0;
    current_player = 1
    document.getElementById("winner1").style.display = "none";
    document.getElementById("winner2").style.display = "none";   
    document.getElementById("ROLLTHEDICE").style.display = "block";
                document.querySelector("#player1-current-score").innerHTML = 0;
                document.querySelector("#player1-total-score").innerHTML = 0;
                document.querySelector("#player2-current-score").innerHTML = 0;
                document.querySelector("#player2-total-score").innerHTML = 0;
                document.querySelector("#die-1").setAttribute("src", images[5])
                document.querySelector("#total").innerHTML = "";

    };







/*
        let hold1= document.getElementById("player1-hold");
            hold1.onclick = function (){
        if(current_player == 1) {
            current_player = 2;
        } else {
            current_player = 1;
        }*/
