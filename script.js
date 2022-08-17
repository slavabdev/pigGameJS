'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const dice = document.querySelector('.dice')
const currentScoreP0 = document.querySelector('#current--0')
const currentScoreP1 = document.querySelector('#current--1')


const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const btnNew = document.querySelector('.btn--new')

//Initial conditions
score0El.textContent = 0
score1El.textContent = 0
dice.classList.add('hidden')

const scores = [0,0]
let currentScore = 0
let activePlayer = 0


//Rolling dice functionality
btnRoll.addEventListener('click', () => {
let rollingDice = Math.trunc(Math.random()*6)+1

//Display dice
dice.classList.remove('hidden')
dice.src = `dice-${rollingDice}.png`

//Check if dice !=1. 
if (rollingDice !=1) {
//add dice value to the current score
currentScore += rollingDice
document.getElementById(`current--${activePlayer}`).textContent = currentScore
}else{
//switch to another player
document.getElementById(`current--${activePlayer}`).textContent = 0
activePlayer = activePlayer === 0 ? 1 : 0
currentScore = 0
player0El.classList.toggle('player--active')
player1El.classList.toggle('player--active')
}
})