const choices = ["rock", "paper", "scissors"]
const computerSelection = computerPlay()
let playerSelection = ""
let winStatus = ""
let playerScore = 0
let computerScore = 0

function computerPlay(){
    const randomChoice = Math.floor(Math.random() * 3)
    const selectedChoice = choices[randomChoice]
    return selectedChoice
}

function playRound(playerSelection, computerSelection){
    switch (true){
        case playerSelection === "rock":
            if (computerSelection === "scissors"){
                return winStatus = "win"
            } else if (computerSelection === "paper"){
                return winStatus = "lose"
            } else {
                return winStatus = "tied"
            }
        case playerSelection === "paper":
            if (computerSelection === "rock"){
                return winStatus = "win"
            } else if (computerSelection === "scissors"){
                return winStatus = "lose"
            } else {
                return winStatus = "tied"
            }
        case playerSelection === "scissors":
                if (computerSelection === "paper"){
                    return winStatus = "win"
                } else if (computerSelection === "rock"){
                    return winStatus = "lose"
                } else {
                    return winStatus = "tied"
                }
        default:
            return "Something went wrong"
    }
}


function game(){
    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Please choose rock, paper, or scissors").toLowerCase()
        playRound(playerSelection, computerSelection)
        if (winStatus === "win"){
            playerScore++
            console.log(`You ${winStatus} this round because ${playerSelection} beats ${computerSelection}! `)
        } else if (winStatus === "lose"){
            computerScore++
            console.log(`You ${winStatus} this round because ${computerSelection} beats ${playerSelection}! `)
        } else {
            console.log(`You ${winStatus} this round! `)
        }
        console.log(`Scores:\nplayer: ${playerScore}\ncomputer: ${computerScore}`)
        if (i == 4){
            console.log(`Final Result: You ${winStatus}!`)
        }
    }
}

game()
