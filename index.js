const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 1000;
let randomNum;

//let randomNum = Math.floor(Math.random() * (max - min)) + min;
myButton.onclick = function(){
    randomNum = Math.floor(Math.random() *max) + min;
    myLabel.textContent = randomNum;
}

