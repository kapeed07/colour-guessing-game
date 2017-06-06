// -------  variableThatHoldsTheBodyBackgroundColor
var bodyColor = "#232323";

// -------  documentSelectors

var square = document.querySelectorAll(".square");
var modeButtons = document.querySelectorAll(".mode");
var reset = document.getElementById("reset");
var displayColor = document.getElementById("displayColor");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");

var pickedColor;
var playingTo = 6;

// -------  modeCodeGoesHere

for (var i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "easy" ? playingTo = 3 : playingTo = 6;
    main();

  });
}

// -------  Call-to-main-function

main();

// -------  mainFunctionGoesHere

function main(){
  h1.style.background = bodyColor;
  message.textContent = "";
  reset.textContent = "new colors";

  var arr = [];
  arr = generateNewColors(playingTo);
  pickedColor = pickColor(arr);
  var Attempts = playingTo - 2;

  displayColor.textContent = pickedColor;

  for (var i = 0; i < square.length; i++) {
    if(arr[i]){
      square[i].style.display = "block";
      square[i].style.background = arr[i];
    }else{
      square[i].style.display = "none";
    }

    square[i].addEventListener("click", function(){
      var clickedColor = this.style.background;
      if(clickedColor === pickedColor){
        message.textContent = "Correct!!!";
        h1.style.background = clickedColor;
        reset.textContent = "play again?";
        for (var i = 0; i < arr.length; i++) {
          square[i].style.background = clickedColor;
        }
      }else {
        this.style.background = bodyColor;
        message.textContent = "Try Again. " + Attempts + " Attempts left";
        Attempts--;
      }
    });
  }
}

// -------  resetFunction

reset.addEventListener("click", function(){
  main();
});

// -------  generateColorArray

function generateNewColors(numColor){
  var arr = [];
  for (var i = 0; i < numColor; i++) {
    arr.push(color());
  }
  return arr;
}

// -------  generateSingleRGBcolor

function color(){
  var r = Math.floor(Math.random() * 257);
  var g = Math.floor(Math.random() * 257);
  var b = Math.floor(Math.random() * 257);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// -------  pick-A-RandomColor

function pickColor(arr){
  return arr[Math.floor(Math.random() * playingTo)];
}
