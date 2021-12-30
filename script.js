


const userChoice = () => {
  let userSelect = prompt("Type R, P, or S").toLowerCase();

  if (userSelect === "r") {
    return "Rock";
  } else if (userSelect === "p") {
    return "Paper";
  } else if (userSelect === "s") {
    return "Scissors";
  } else {
    return alert("Invalid input. How dare you.");
  }
};

// This gets Computer value
const computerNumber = () => {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return "Rock";
  } else if (computerChoice === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
};

// Determine winner
const winner = () => {
    const player = userChoice();
    const computer = computerNumber();
    if 
    (player === "Rock" && computer === "Scissors") {
        return "Computer chose Scissors. You win!"
    } else if 
    (player === "Rock" && computer === "Paper") {
        return "Computer chose Paper. You Lose..."
    } else if 
    (player === "Scissors" && computer === "Paper") {
        return "Computer chose Paper. You win!"
    } else if 
    (player === "Scissors" && computer === "Rock") {
        return "Computer chose Rock. You Lose..."
    } else if 
    (player === "Paper" && computer === "Rock") {
        return "Computer chose Rock. You win!"
    } else if 
    (player === "Paper" && computer === "Scissors") {
        return "Computer chose Scissors. You Lose..."
    } else if 
    (player === computer) {
        return " It's a tie!"
    } else {
        return "Select R, P, or S"
    }
}

const endgame = alert(winner());



