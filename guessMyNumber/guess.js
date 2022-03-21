"use strict";

var secretNumber = Math.round(Math.random() * 100);
var loss = document.getElementById("loss");
var message = document.getElementById("info_m");
var scoreLabel = document.getElementById("score_l");
var highscoreLabel = document.getElementById("highscore_l");
var resetter = document.getElementById("replay");

scoreLabel.textContent = 20;
highscoreLabel.textContent = 0;

const getValue = () => {
  var score = Number(scoreLabel.textContent);

  var input = document.getElementById("guess").value;

  if (input > secretNumber && score != 0) {
    message.textContent = "Wooo! Too high (-1)";
    message.style = "color:crimson;";
    score--;
    scoreLabel.textContent = score;
  } else if (input < secretNumber && score != 0) {
    message.textContent = "Ooo! Too low (-1)";
    message.style = "color:crimson;";
    score--;
    scoreLabel.textContent = score;
  } else if (input == secretNumber && score != 0) {
    message.textContent = "Yikes! You win";
    message.style = "color:green;";
    highscoreLabel.style = "color:green;";
    scoreLabel.style = "color:green;";
    highscoreLabel.textContent =
      highscoreLabel.textContent > score ? highscoreLabel.textContent : score;
  } else if (score <= 0) {
    loss.style = "display:block;";
  } else {
    message.textContent = "Invalid input (-2)";
    score -= 2;
    scoreLabel.textContent = score;
  }
};

resetter.onclick = function () {
  message.textContent = "Enter your guess";
  scoreLabel.textContent = 20;
  loss.style = "display:none;";
  message.style = "color:burlywood;";
  scoreLabel.style = "color:burlywood;";
  secretNumber = Math.round(Math.random() * 100);
  console.log(secretNumber);
};
