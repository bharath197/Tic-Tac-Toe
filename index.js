import { GameBoard } from "./GameBoard.js";
import { GameController } from "./GameController.js";

const getInfo = document.querySelector('.getInformation')
const p1Input = document.querySelector('#player1')
const p2Input = document.querySelector('#player2')
const startButton = document.querySelector('.start')

const container = document.querySelector('.outerContainer')
const board = document.querySelectorAll('.gameBoard>div')
const resetButton = document.querySelector('.reset')

const winnerDiv = document.querySelector('.declareWinner')

const form = document.querySelector('form')

const p1Score = document.querySelector('.p1')
const p2Score = document.querySelector('.p2')

startButton.addEventListener('click', (event) => {
    event.preventDefault();
    if ((!p1Input.value || !p2Input.value)) {
        alert('Please fill in all player names.');
    }
    else {
        const gameBoard = new GameBoard(p1Input.value, p2Input.value);
        const gameController = new GameController(gameBoard)
        getInfo.style.display = 'none'
        container.classList.remove('blur')
        displayGameboard(gameBoard, gameController)
        resetButton.addEventListener('click', () => reset(gameBoard, gameController))
        board.forEach(box => {
            box.addEventListener('click', () => {
                let i = box.getAttribute('data-index-number') - 1
                gameBoard.gameBoardArray[i] = gameController.currentPlayer.mark
                if (gameController.checkWinner()) {

                    declareWinner(gameBoard, gameController);
                    const startAgain = document.querySelector('.startAgain')
                    startAgain.addEventListener('click', () => reset(gameBoard, gameController))
                }
                else {
                    gameController.switchPlayer()
                    displayGameboard(gameBoard, gameController)
                }
            })
        })
    }

})

function declareWinner(gameBoard, gameController) {
    winnerDiv.innerHTML = `<p> ${gameController.getWinner().name} wins! </p>
                    <button class='startAgain'> start Again</button>`
    winnerDiv.style.display = 'flex'
    container.classList.add('blur')
    displayGameboard(gameBoard, gameController)
}
function reset(gameBoard, gameController) {
    winnerDiv.style.display = 'none'
    container.classList.add('blur')
    gameBoard.reset()
    form.reset()
    getInfo.style.display = 'flex'
    displayGameboard(gameBoard, gameController)
}
function displayGameboard(gameBoard, gameController) {
    for (var i = 0; i < board.length; i++) {
        board[i].textContent = gameBoard.gameBoardArray[i]
    }

    p1Score.textContent = gameBoard.getP1()
    p2Score.textContent = gameBoard.getP2()
    console.log(gameController.currentPlayer)

    if (gameController.currentPlayer == gameBoard.player2) {
        p2Score.classList.add('highlight')
        p1Score.classList.remove('highlight')
    }
    else {
        p1Score.classList.add('highlight')
        p2Score.classList.remove('highlight')
    }
}

function playerboard(gameBoard, gameController){
    p1Score.textContent = gameBoard.getP1()
    p2Score.textContent = gameBoard.getP2()
    console.log(gameController.currentPlayer)

    if (gameController.currentPlayer == gameBoard.player2) {
        p2Score.classList.add('highlight')
        p1Score.classList.remove('highlight')
    }
    else {
        p1Score.classList.add('highlight')
        p2Score.classList.remove('highlight')
    }
}


