let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomDiceImage = "dice"+randomNumber1+".png";
let randomImageSource = "images/"+randomDiceImage;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


let randomNumber2 = Math.floor(Math.random()*6+1);
let diceNumber = "images/"+"dice"+randomNumber2+".png";

document.querySelector(".img2").setAttribute("src",diceNumber);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Wins";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 Wins";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}