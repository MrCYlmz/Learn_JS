"use strict";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "🎉 Correct Number";

// console.log(document.querySelector(".guess").value);
const scoreInit = 5;
const messageInit = document.querySelector(".message").textContent;
const backgroundColorInit =
  document.querySelector("body").style.backgroundColor;
let highScore = Number(document.querySelector(".highscore").textContent);
document.querySelector(".score").textContent = scoreInit;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = scoreInit;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (score > 0) {
    if (!guess) {
      document.querySelector(".message").textContent = "⛔ No number!";
    } else if (guess === randomNumber) {
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = score;
      }
      document.querySelector(".message").textContent = "🎉 Correct Number";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").textContent = guess;
    } else if (guess < randomNumber) {
      document.querySelector(".message").textContent = "⬆️ Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guess > randomNumber) {
      document.querySelector(".message").textContent = "⬇️ Too high";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".message").textContent = "💣 You lost the game";
    document.querySelector("body").style.backgroundColor = "#eb0808";
  }
});
document.querySelector(".again").addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = scoreInit;
  document.querySelector(".score").textContent = scoreInit;
  document.querySelector("body").style.backgroundColor = backgroundColorInit;
  document.querySelector(".message").textContent = messageInit;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
