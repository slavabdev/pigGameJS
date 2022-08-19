"use strict";

//Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const dice = document.querySelector(".dice");
const currentScoreP0 = document.querySelector("#current--0");
const currentScoreP1 = document.querySelector("#current--1");

const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

//Initial conditions
let playing, scores, currentScore, activePlayer;

const init = function () {
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  dice.classList.add("hidden");

  currentScoreP0.textContent = 0;
  currentScoreP1.textContent = 0;

  player1El.classList.remove("player--active");
  player0El.classList.add("player--active");

  player1El.classList.remove("player--winner");
  player0El.classList.remove("player--winner");
};

init();

//Switch player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//Rolling dice functionality
btnRoll.addEventListener("click", () => {
  if (playing) {
    let rollingDice = Math.trunc(Math.random() * 6) + 1;

    //Display dice
    dice.classList.remove("hidden");
    dice.src = `dice-${rollingDice}.png`;

    //Check if dice !=1.
    if (rollingDice != 1) {
      //add dice value to the current score
      currentScore += rollingDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to another player
      switchPlayer();
    }
  }
});

//Hold the score
btnHold.addEventListener("click", () => {
  //1. Add current score to the active player score
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. check the score if it still >= 100
    // if so  - win the game
    if (scores[activePlayer] >= 100) {
      dice.classList.add("hidden");
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    }
    //otherwise switch the player
    switchPlayer();
  }
});

//Reset the game
btnNew.addEventListener("click", init);
