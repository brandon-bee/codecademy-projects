let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 11);

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  if (humanGuess > 10) {
    alert('Please guess a number between 0 and 10.');
    br;
  };
  const humanDifference = Math.abs(targetGuess - humanGuess);
  const computerDifference = Math.abs(targetGuess - computerGuess);
  return humanDifference <= computerDifference;
};

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  };
};

const advanceRound = () => currentRoundNumber++;