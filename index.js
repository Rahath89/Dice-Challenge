var randomnumber1 = Math.floor(Math.random()*6) + 1;
var randomDice1 = "images/dice"+randomnumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src" , randomDice1);

var randomnumber2 = Math.floor(Math.random()*6) + 1;
var randomDice2 = "images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

if (randomnumber1 > randomnumber2){
  document.querySelector("h1").innerHTML = "Player1 Win!";
}
else if (randomnumber1 < randomnumber2){
  document.querySelector("h1").innerHTML = "Player2 Win!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}

/* Alternative
var a = Math.random()*6;
a = Math.floor(a)+1;
if(a === 1){
document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
else if(a === 2){
document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
else if(a === 3){
document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
else if(a === 4){
document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
else if(a === 5){
document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
else if(a === 6){
document.querySelector(".img1").setAttribute("src","images/dice6.png");
}

var b = Math.random()*6;
b = Math.floor(b)+1;
if(b === 1){
document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else if(b === 2){
document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if(b === 3){
document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if(b === 4){
document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if(b === 5){
document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else if(b === 6){
document.querySelector(".img2").setAttribute("src","images/dice6.png");
}

if (a > b){
    document.querySelector("h1").innerHTML = "Player1 Win!";
}
else if (a < b){
    document.querySelector("h1").innerHTML = "Player2 Win!";
}
else{
  document.querySelector("h1").innerHTML = "DRAW!";
}
*/
