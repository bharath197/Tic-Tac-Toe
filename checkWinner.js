function compare(a, b, c) {
    return (gameboard[a] && gameboard[b] && gameboard[c]) && gameboard[a] === gameboard[b] && gameboard[b] === gameboard[c]
}
function checkRows() {
    for (let i = 0; i <= 6; i = i + 3) {
        if (compare(i, i + 1, i + 2)) {
            // winner = gameboard[i] === 'X' ? 'player1' : 'player2'
            winner = currentPlayer;
            console.log(`${getObjectKey(GameBoard, currentPlayer)} wins`)
            reset()
        }
    }
}
function checkcolumns() {
    for (let i = 0; i <= 2; i = i + 1) {
        if (compare(i, i + 3, i + 6)) {
            winner = currentPlayer === 'X' ? 'player1' : 'player2'
            console.log(`${winner} wins`)
            reset()
        }
    }
}
function checkDiag() {
    if (compare(0, 4, 8)||compare(2,4,8)) {
        winner = currentPlayer === 'X' ? 'player1' : 'player2'
        console.log(`${winner} wins`)
        reset()
    }    
}
function checkifTie() {
    if (winner === '') {
        for (let i = 0; i < gameboard.length; i++) {
            if (gameboard[i] === '') return
        }
        console.log('draw')
        reset()
    }
}

