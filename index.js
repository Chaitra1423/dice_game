var randomNumber1 =(Math.floor(Math.random()*6)+1);

var randomDiceImage=("dice"+randomNumber1+".png");

var randomImageSource="images/"+randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2=(Math.floor(Math.random()*6)+1);

var randomImageNumber = "dice"+randomNumber2+".png";

var randomImagePath = "images/"+randomImageNumber;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImagePath)

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player2 won!🚩";
}else{
    document.querySelector("h1").innerHTML="DRAW!!!!";
}