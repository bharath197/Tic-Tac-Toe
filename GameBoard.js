class Player{
    constructor(mark, name){
        this.mark = mark
        this.name = name
        this.score = 0;
    }
}

export class GameBoard{
    constructor(player1, player2){
        this.gameBoardArray = new Array(9);
        this.player1 = new Player('X', player1)
        this.player2 = new Player('O', player2)
    }
    reset(){
        for(let i = 0; i< this.gameBoardArray.length; i++){
            this.gameBoardArray[i] = ''
        }
    }
    getP1(){
        return this.player1.name
    }
    getP2(){
        return this.player2.name
    }
    scoreUp(winner){
        winner.score += 1
    }
}