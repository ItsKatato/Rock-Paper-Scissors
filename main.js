const body = document.querySelector('body');
const gameBtns = document.querySelectorAll('.gameBtns .button');
const bkgTri = document.querySelector('.backgroundTri');

function loaded(){
    gameBtns.forEach(item => {
        item.classList.remove('loading')
    })
    bkgTri.classList.remove('loading')
}

body.onload = function() {loaded()}

const choices = ["rock", "paper", "scissors"];
let computerSelection = "";
let winStatus = "";
let playerScore = 0;
let roundsPlayed = 0;
let winMessage = ""

function computerPlay(){
    const randomChoice = Math.floor(Math.random() * 3)
    const selectedChoice = choices[randomChoice]
    return selectedChoice
}

const playerSelBtnOuter = document.querySelector('.playerSelectionBtn .outerCircle.main')
const playerSelBtnInner = document.querySelector('.playerSelectionBtn .outerCircle.inner')
const compSelBtnOuter = document.querySelector('.computerSelectionBtn .outerCircle.main')
const compSelBtnInner = document.querySelector('.computerSelectionBtn .outerCircle.inner')
const playerSelImg = document.querySelector('.playerSelectionImg')
const compSelImg = document.querySelector('.computerSelectionImg')

function playRound(playerSelection, computerSelection){
    switch (true){
        case playerSelection.matches('.rockBtn'):
            playerSelBtnOuter.style.backgroundColor = '#9D1634';
            playerSelBtnInner.style.backgroundColor = '#DB2E4D';
            playerSelImg.src = "images/icon-rock.svg"
            if (computerSelection === "scissors"){
                compSelBtnOuter.style.backgroundColor = '#C76C1B';
                compSelBtnInner.style.backgroundColor = '#EB9F0E';
                compSelImg.src = "images/icon-scissors.svg"
                return winStatus = "WIN"
            } else if (computerSelection === "paper"){
                compSelBtnOuter.style.backgroundColor = '#2A45C2';
                compSelBtnInner.style.backgroundColor = '#4664F4';
                compSelImg.src = "images/icon-paper.svg"
                return winStatus = "LOSE"
            } else {
                compSelBtnOuter.style.backgroundColor = '#9D1634';
                compSelBtnInner.style.backgroundColor = '#DB2E4D';
                compSelImg.src = "images/icon-rock.svg"
                return winStatus = "TIED"
            }
        case playerSelection.matches('.paperBtn'):
            playerSelBtnOuter.style.backgroundColor = '#2A45C2';
            playerSelBtnInner.style.backgroundColor = '#4664F4';
            playerSelImg.src = "images/icon-paper.svg"
            if (computerSelection === "rock"){
                compSelBtnOuter.style.backgroundColor = '#9D1634';
                compSelBtnInner.style.backgroundColor = '#DB2E4D';
                compSelImg.src = "images/icon-rock.svg"
                return winStatus = "WIN"
            } else if (computerSelection === "scissors"){
                compSelBtnOuter.style.backgroundColor = '#C76C1B';
                compSelBtnInner.style.backgroundColor = '#EB9F0E';
                compSelImg.src = "images/icon-scissors.svg"
                return winStatus = "LOSE"
            } else {
                compSelBtnOuter.style.backgroundColor = '#2A45C2';
                compSelBtnInner.style.backgroundColor = '#4664F4';
                compSelImg.src = "images/icon-paper.svg"
                return winStatus = "TIED"
            }
        case playerSelection.matches('.scissorsBtn'):
            playerSelBtnOuter.style.backgroundColor = '#C76C1B';
            playerSelBtnInner.style.backgroundColor = '#EB9F0E';
            playerSelImg.src = "images/icon-scissors.svg"
            if (computerSelection === "paper"){
                compSelBtnOuter.style.backgroundColor = '#2A45C2';
                compSelBtnInner.style.backgroundColor = '#4664F4';
                compSelImg.src = "images/icon-paper.svg"
                return winStatus = "WIN"
            } else if (computerSelection === "rock"){
                compSelBtnOuter.style.backgroundColor = '#9D1634';
                compSelBtnInner.style.backgroundColor = '#DB2E4D';
                compSelImg.src = "images/icon-rock.svg"
                return winStatus = "LOSE"
            } else {
                compSelBtnOuter.style.backgroundColor = '#C76C1B';
                compSelBtnInner.style.backgroundColor = '#EB9F0E';
                compSelImg.src = "images/icon-scissors.svg"
                return winStatus = "TIED"
            }
        default:
            return "Something went wrong"
    }
}



// Css Manipulation

// Rules Section
const rulesBtn = document.querySelector('.rulesBtn');
const rulesScreen = document.querySelectorAll('.rulesScreen');
rulesBtn.addEventListener('click', () => {
    rulesScreen.forEach(item => item.classList.add('rulesOpen'));
});

const rulesCloseBtn = document.querySelector('.closeButton');
rulesCloseBtn.addEventListener('click', () => {
    rulesScreen.forEach(item => item.classList.remove('rulesOpen'));
});
// Score Section

const scoreAmt = document.querySelector('.scoreAmount');

// Gameplay Section
gameBtns.forEach(item => {
    item.addEventListener('click', (gamePlay));
});

function gamePlay(){
    switchScreen();
    computerSelection = computerPlay();
    playRound(this, computerSelection);

    if (this.matches('.rockBtn')){
        playerSelection = 'rock';
    } else if (this.matches('.paperBtn')){
        playerSelection = 'paper';
    } else {
        playerSelection = 'scissors';
    }

    if (winStatus === "WIN"){
        playerScore++;
        roundsPlayed++;
        winMessage = `YOU ${winStatus}! `;
    } else if (winStatus === "LOSE"){
        playerScore--;
        roundsPlayed++;
        winMessage = `YOU ${winStatus}! `;
    } else {
        roundsPlayed++;
        winMessage = `YOU ${winStatus}! `;
    }
    console.log(`Score: ${playerScore}`);
    if (roundsPlayed == 4){
        winMessage = `Final Result: You ${winStatus}!`;
        console.log(`Final Scores: ${playerScore}`);
    }
    scoreAmt.textContent = playerScore;
    whoWonText.textContent = winMessage
};

// Screen Switching Section
const playScreen = document.querySelector('.playScreen');
const resultsScreen = document.querySelector('.resultsScreen');
const playerSelBtn = document.querySelector('.playerSelectionBtn')
const computerSelBtn = document.querySelector('.computerSelectionBtn')
const whoWonText = document.querySelector('.whoWon')
const playAgainBtn = document.querySelector('.playAgainBtn')
const selectionTitles = document.querySelectorAll('.selectionTitle')

function switchScreen(){
    gameBtns.forEach(item => {
        item.classList.add('animationOut');
    })
    bkgTri.classList.add('animationOut');
    setTimeout(function() {
        playScreen.style.display = 'none';
        resultsScreen.style.display = 'flex';
        setTimeout(function() {
            playerSelBtn.classList.remove('hidden');
            computerSelBtn.classList.remove('hidden');
            selectionTitles.forEach(item => {
                item.classList.remove('hidden');
            })
            setTimeout(function() {
                whoWonText.classList.remove('hidden');
                setTimeout(function() {
                    playAgainBtn.classList.remove('hidden');
                  }, 1000)
              }, 1000)
          }, 100)
      }, 1000)
}

// Play Again

playAgainBtn.addEventListener('click', () => {
        if (roundsPlayed == 4){
            roundsPlayed = 0;
            playerScore = 0;
            scoreAmt.textContent = playerScore;
        }
        playerSelBtn.classList.add('hidden');
        computerSelBtn.classList.add('hidden');
        selectionTitles.forEach(item => {
            item.classList.add('hidden');
        })
        whoWonText.classList.add('hidden');
        playAgainBtn.classList.add('hidden');
        setTimeout(function() {
            resultsScreen.style.display = 'none';
            setTimeout(function() {
                playScreen.style.display = 'flex';
                setTimeout(function() {
                    gameBtns.forEach(item => {
                        item.classList.remove('animationOut');
                    })
                    bkgTri.classList.remove('animationOut');
                  }, 10)
              }, 10)
          }, 1000)
})