"use strict";
let score;
let highScore = 0;
let selectedNumber;
let endOfGame = false;

const changeMessage = (msg) => {
  document.querySelector(".message").textContent = msg;
};
const decreaseScore = () => {
  score--;
  document.querySelector(".score").textContent = score;
};
const changeBackgroundColor = (color) => {
  document.querySelector("body").style.backgroundColor = color;
};

function initialSettings() {
  endOfGame = false;
  score = 5;
  changeMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  changeBackgroundColor("#222");
  selectedNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = undefined;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
}
function loss() {
  endOfGame = true;
  changeMessage("You loss 😭");
  changeBackgroundColor("#720606");
}
function falseGuess(guess) {
  decreaseScore();
  if (score <= 0) loss();
  else {
    const msg =
      guess < selectedNumber
        ? "Your guess is to low 📉"
        : "Your guess is high 📈";
    changeMessage(msg);
  }
}
function trueGuess(guess) {
  endOfGame = true;
  if (score > highScore) {
    highScore = score;
    document.querySelector(".highscore").textContent = highScore;
  }
  changeMessage("You won 🎉🎉🎉");
  changeBackgroundColor("#60b347");
  document.querySelector(".number").textContent = guess;
  document.querySelector(".number").style.width = "30rem";
  endOfGame = true;
}
function outOfRangeGuess() {
  changeMessage("Your guess can't be bigger than 20 or less than 1");
}
function submit() {
  if (!endOfGame) {
    const guess = Number(document.querySelector(".guess").value);
    if (!guess)
      changeMessage(
        "Your input is empty please select a number between 1 and 20 "
      );
    else if (guess < 1 || guess > 20) outOfRangeGuess();
    else if (guess === selectedNumber) trueGuess(guess);
    else falseGuess(guess);
  }
}

initialSettings();
document.querySelector(".check").addEventListener("click", submit);
document.querySelector(".again").addEventListener("click", initialSettings);
document.querySelector(".guess").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    submit();
  }
});
