let humanScore = 0
let computerScore = 0

function getComputerChoice() {
  let computerSelections = ['Rock', 'Paper', 'Scissors']
  let index = Math.floor(Math.random() * 3)
  return computerSelections[index]
}

function getHumanChoice() {
  let humanChoice = prompt('Chose Rock, Paper or Scissors')
  return humanChoice
}

function playRound(humanChoice, computerChoice) {
  console.log(`Player chooses: ${humanChoice}`)
  console.log(`Computer chooses: ${computerChoice}`)
  if (
    (humanChoice === 'Rock' && computerChoice === 'Rock') ||
    (humanChoice === 'Paper' && computerChoice === 'Paper') ||
    (humanChoice === 'Scissors' && computerChoice === 'Scissors')
  ) {
    console.log('tie')
  } else if (
    (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    humanScore++
    console.log(humanScore)
    console.log(`You Win! ${humanChoice} beats ${computerChoice}!`)
  } else if (
    (humanChoice === 'Rock' && computerChoice === 'Paper') ||
    (humanChoice === 'Paper' && computerChoice === 'Scissors') ||
    (humanChoice === 'Scissors' && computerChoice === 'Rock')
  ) {
    computerScore++
    console.log(computerScore)
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}!`)
  }
}

function playGame() {
  let humanChoice = getHumanChoice()

  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
  }
  if (humanScore > computerScore) {
    console.log(`You win! With a score of ${humanScore} to ${computerScore}`)
  } else if (computerScore > humanScore) {
    console.log(
      `Computer wins! With a score of ${computerScore} to ${humanScore}`
    )
  } else {
    console.log('Game was a tie!!!!!!!!!!!!')
  }
}

playGame()

//playRound(humanChoice, computerChoice)

//if (sign.toLowerCase() === 'scorpio') {
//alert("Wow! I'm a Scorpio too!")
//}

// there are many ways to use the prompt feature
//sign = window.prompt() // open the blank prompt window
//sign = prompt() //  open the blank prompt window
//sign = window.prompt('Are you feeling lucky') // open the window with Text "Are you feeling lucky"
//sign = window.prompt('Are you feeling lucky', 'sure') // open the window with Text "Are you feeling lucky" and default value "sure"
