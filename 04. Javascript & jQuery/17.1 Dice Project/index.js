// 1st dice random number between 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// To select from Dice1.png to Dice6.png
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

// querySelectorAll selects all (here 2) images, [0] will select 1st one
var image1 = document.querySelectorAll("img")[0];

// Changing src attribute with randomImageSource1
image1.setAttribute("src", randomImageSource1);

// SAME WITH DICE 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//To change heading
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
