'use strict';
// Selecting the buttons
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Selecting the elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const winningScore = 100;

let scores, currentScore, activePlayer, gameIsPlaying;

const switchPlayer = function () {
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
};

const init = function () {
  scores = [0, 0];
  // Save values
  currentScore = 0;
  activePlayer = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  gameIsPlaying = true;
  player0El.classList.add('active--player');
  player1El.classList.remove('active--player');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  // Starting conditions
  diceEl.classList.add('hidden');
};

init();

// Rolling the Dice
btnRollDice.addEventListener('click', function () {
  if (gameIsPlaying) {
    // 1. Create a random Dice Roll
    const dice = Math.trunc(Math.random() * 6 + 1);

    // 2. Display the result
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player

      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (gameIsPlaying) {
    // 1. Add current Score to total score
    scores[activePlayer] += currentScore;
    // 2. Update the Total Score
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 3. Reset active Player current Score
    if (scores[activePlayer] >= winningScore) {
      // Finish Game
      gameIsPlaying = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      // Score < 100 switch Player
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener('click', function () {
  init();
});
