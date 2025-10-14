'use strict';
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function(number) {
    document.querySelector('.number').textContent = number;
}

const createSecretNumber () {
    return Math.trunc(Math.random() * 20) + 1;
}

// get a random Number between 1..20
let secretNumber = createSecretNumber();
let score = 20;
let hightScore = 0;

// A function in JS is just a value so it can be an argument in another function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number entered!');
  }
  // Then the Player wins
  else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    displayNumber(secretNumber);
    document.querySelector('.number').style.width = '30rem';
    if (score > hightScore) {
      document.querySelector('.highscore').textContent = score;
    }
  }
  // Wrong guess
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '↗️ Too high!' : '↘️ Too low!');
      score--;
      setScore(score);
    } else {
      displayMessage('☠️ You lost the game!');
      document.querySelector('.score').textContent(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = createSecretNumber();
  displayMessage('Start guessing...');
  setScore(score);
  document.querySelector('.guess').textContent = '';
  displayNumber('?');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
