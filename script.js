
const cards = Array.from(document.querySelectorAll('.card'));

const restartButton = document.   querySelector('#restart-button');
  let flippedCards = [];
  let matchedCards = [];

// Shuffle cards
  shuffleCards();

// Set up event listeners
  cards.forEach(card => {
   card.addEventListener('click', flipCard);
});

restartButton.addEventListener('click', restartGame);

// Game logic
function flipCard() {
  if (flippedCards.length < 2 && !this.classList.contains('flipped') && !matchedCards.includes(this)) {
    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
      checkMatch();
    }
  }
}

function checkMatch() {
  let isMatch = flippedCards[0].innerHTML === flippedCards[1].innerHTML;

  if (isMatch) {
    matchedCards = matchedCards.concat(flippedCards);
  } else {
    setTimeout(() => {
      flippedCards.forEach(card => {
        card.classList.remove('flipped');
      });
    }, 1000);
  }

  flippedCards = [];

  // Check if game is won
  if (matchedCards.length === cards.length) {
    alert('You won!');
  }
}

function restartGame() {
  cards.forEach(card => {
    card.classList.remove('flipped');
  });

  matchedCards = [];
  flippedCards = [];

  // Shuffle cards
  shuffleCards();
}

function shuffleCards() {
  let gameBoard = document.querySelector('#game-board');

  cards.forEach(card => gameBoard.removeChild(card));

  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  cards.forEach(card => gameBoard.appendChild(card));
}

const timerDisplay = document.querySelector('#timer');
let elapsedTime = 0;
let timerInterval;

function startGame() {
  // Other game start logic...

  // Start the timer
  timerInterval = setInterval(() => {
    elapsedTime++;
    timerDisplay.textContent = `Elapsed time: ${elapsedTime} seconds`;
  }, 1000);
}

function stopGame() {
  // Other game stop logic...

  // Stop the timer
  clearInterval(timerInterval);
}

function restartGame() {
  // Other game restart logic...

  // Reset the timer
  elapsedTime = 0;
  timerDisplay.textContent = `Elapsed time: ${elapsedTime} seconds`;
}

const scoreDisplay = document.querySelector('#score');
let score = 0;



function restartGame() {
  // Other game restart logic...

  // Reset the score
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
}


const countdownDisplay = document.querySelector('#countdown');
let timeLeft = 60;

function startGame() {
  // Other game start logic...

  // Start the countdown
  countdownInterval = setInterval(() => {
    timeLeft--;
    countdownDisplay.textContent = `Time left: ${timeLeft} seconds`;

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  // Other game end logic...

  // Stop the countdown
  clearInterval(countdownInterval);
}

function restartGame() {
  // Other game restart logic...

  // Reset the countdown
  timeLeft = 60;
  countdownDisplay.textContent = `Time left: ${timeLeft} seconds`;
}

const matchSound = new Audio('match.wav');

function checkMatch() {
  // Other match checking logic...

  if (isMatch) {
    // Other match found logic...

    // Play the match sound
    matchSound.play();
  }
}

function checkMatch() {
  // Other match checking logic...

  if (!isMatch) {
    // Delay flipping back the cards
    setTimeout(() => {
      // Logic to flip back the cards
      flippedCards.forEach(card => {
        card.classList.remove('flipped');
      });
      flippedCards = [];
    }, 1000); // 1000 milliseconds = 1 second
  }
}

function checkMatch() {
  // Other match checking logic...

  if (!isMatch) {
    // Add shake animation
    flippedCards.forEach(card => {
      card.classList.add('shake');
    });

    // Delay flipping back the cards
    setTimeout(() => {
      // Logic to flip back the cards
      flippedCards.forEach(card => {
        card.classList.remove('flipped');
        card.classList.remove('shake');
      });
      flippedCards = [];
    }, 1000); // 1000 milliseconds = 1 second
  }
}

function checkMatch() {
  // Other match checking logic...

  if (!isMatch) {
    // Delay flipping back the cards
    setTimeout(() => {
      // Logic to flip back the cards
      flippedCards.forEach(card => {
        card.classList.remove('flipped');
      });
      flippedCards = [];
    }, 1000); // 1000 milliseconds = 1 second
  }
}

const timerEndSound = new Audio('timerEnd.wav');

// Play the sound when the timer reaches zero:
function startGame() {
  // Other game start logic...

  // Start the countdown
  countdownInterval = setInterval(() => {
    timeLeft--;
    countdownDisplay.textContent = `Time left: ${timeLeft} seconds`;

    if (timeLeft <= 0) {
      // Play the timer end sound
      timerEndSound.play();

      endGame();
    }
  }, 1000);
}

const messageDisplay = document.querySelector('#message');


function checkMatch() {
  console.log('Card 1 value:', flippedCards[0].dataset.value);
  console.log('Card 2 value:', flippedCards[1].dataset.value);

  let isMatch = flippedCards[0].dataset.value === flippedCards[1].dataset.value;
  console.log('Is match:', isMatch);

  // rest of your code...


  if (isMatch) {
    // Increase the score
    score++;
    scoreDisplay.textContent = `Score: ${score}`;

    // Update the message display
    messageDisplay.textContent = 'You found a match!';

    // Add the matched cards to the matchedCards array
    matchedCards = matchedCards.concat(flippedCards);
  } else {
    // Update the message display
    messageDisplay.textContent = 'No match. Try again.';

    // Delay flipping back the cards
    setTimeout(() => {
      flippedCards.forEach(card => {
        card.classList.remove('flipped');
      });
      flippedCards = [];
    }, 1000); // 1000 milliseconds = 1 second
  }

  // Check if game is won
  if (matchedCards.length === cards.length) {
    messageDisplay.textContent = 'You won!';
  }
}


function flipCard() {
  if (flippedCards.length < 2 && !this.classList.contains('flipped') && !matchedCards.includes(this)) {
    this.classList.add('flipped');
    flippedCards.push(this);

    // Clear the message
    messageDisplay.textContent = '';

    if (flippedCards.length === 2) {
      checkMatch();
    }
  }
}

function restartGame() {
  cards.forEach(card => {
    card.classList.remove('flipped');
  });

  matchedCards = [];
  flippedCards = [];

  // Reset the timer
  elapsedTime = 0;
  timerDisplay.textContent = `Elapsed time: ${elapsedTime} seconds`;

  // Reset the score
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;

  // Reset the countdown
  timeLeft = 60;
  countdownDisplay.textContent = `Time left: ${timeLeft} seconds`;

  // Clear the message
  messageDisplay.textContent = '';

  // Shuffle cards
  shuffleCards();
}




