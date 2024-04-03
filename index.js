var random1 = Math.floor(Math.random()*6)+1;
var random2 = Math.floor(Math.random()*6)+1;
function dice1(num1){
    if(num1===1){
        document.querySelectorAll("img")[0].setAttribute("src","dice1.png");
    }
    if(num1===2){
        document.querySelectorAll("img")[0].setAttribute("src","dice2.png");
    }
    if(num1===3){
        document.querySelectorAll("img")[0].setAttribute("src","dice3.png");
    }
    if(num1===4){
        document.querySelectorAll("img")[0].setAttribute("src","dice4.png");
    }
    if(num1===5){
        document.querySelectorAll("img")[0].setAttribute("src","dice5.png");
    }
    if(num1===6){
        document.querySelectorAll("img")[0].setAttribute("src","dice6.png");
    }
}
function dice2(num1){
    if(num1===1){
        document.querySelectorAll("img")[1].setAttribute("src","dice1.png");
    }
    if(num1===2){
        document.querySelectorAll("img")[1].setAttribute("src","dice2.png");
    }
    if(num1===3){
        document.querySelectorAll("img")[1].setAttribute("src","dice3.png");
    }
    if(num1===4){
        document.querySelectorAll("img")[1].setAttribute("src","dice4.png");
    }
    if(num1===5){
        document.querySelectorAll("img")[1].setAttribute("src","dice5.png");
    }
    if(num1===6){
        document.querySelectorAll("img")[1].setAttribute("src","dice6.png");
    }
}
dice1(random1);
dice2(random2);
function win(num1,num2){
    if(num1>num2){
        document.querySelector("h1").innerHTML="player1 wins";
    }
    if(num1<num2){
        document.querySelector("h1").innerHTML="player2 wins";
    }
    if(num1===num2){
        document.querySelector("h1").innerHTML="draw";
    }
}
win(random1,random2);