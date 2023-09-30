export class GameController {
    constructor(gameBoard) {
        this.gameBoard = gameBoard
        this.currentPlayer = this.gameBoard.player1
    }
    switchPlayer() {
        if (this.currentPlayer == this.gameBoard.player1) this.currentPlayer = this.gameBoard.player2;
        else this.currentPlayer = this.gameBoard.player1
    }
    checkIfEqual(a, b, c) {
        if (this.gameBoard.gameBoardArray[a] === this.gameBoard.gameBoardArray[b]
            && this.gameBoard.gameBoardArray[a] === this.gameBoard.gameBoardArray[c]
            && this.gameBoard.gameBoardArray[a] && this.gameBoard.gameBoardArray[b] && this.gameBoard.gameBoardArray[c]) {
            return true
        }
    }
    checkWinner() {
        const winningCombination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < winningCombination.length; i++) {
            if (this.checkIfEqual(...winningCombination[i])) {
                return true
            }
        }
        return false
    }
    getWinner() {
        return this.currentPlayer;
    }
    getCurrentPlayer(){
        return this.currentPlayer;
    }
}

