'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const rollEvent = function () {
  if (playing) {
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    const dicePic = `dice-${randomNumber}.png`;
    diceEl.classList.remove('hidden');
    diceEl.src = dicePic;
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
};
function changePlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

const holdEvent = function () {
  if (playing) {
    const activePlayerScore = document.getElementById(`score--${activePlayer}`);
    const totalScore = Number(activePlayerScore.textContent) + currentScore;
    activePlayerScore.textContent = totalScore;
    if (totalScore < 20) {
      changePlayer();
    } else {
      const PlayerEl = document.querySelector(`.player--${activePlayer}`);
      PlayerEl.classList.remove('player--active');
      PlayerEl.classList.add('player--winner');
      diceEl.classList.add('hidden');
      playing = false;
    }
  }
};
const newEvent = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  activePlayer = 0;
  currentScore = 0;
  playing = true;
  player0El.classList.add('player--active');
};

btnRoll.addEventListener('click', rollEvent);
btnHold.addEventListener('click', holdEvent);
btnNew.addEventListener('click', newEvent);
