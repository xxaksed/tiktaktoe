class Game {
    constructor(board=[], id = ''){
        this.board = board;
        this.id = id
    }
    display(){
        const body = document.getElementsByTagName('body')[0];
        const game = document.createElement('div');
        game.id = this.id;

        for (let i = 0; i < this.board.length; i++) {
            const line = document.createElement('div');
            line.className = 'layer' + i;

            game.appendChild(line)
            body.appendChild(game)

            var hod = 0
            for (let y = 0; y < this.board[i].length; y++) {

                const box = document.createElement('div');
                if (this.board[i][y] == '1') {
                    box.innerHTML = 'X'
                }
                if (this.board[i][y] == '2') {
                    box.innerHTML = 'O'
                }

                line.appendChild(box)
                box.className = 'cube'
            }
        }
    }
}

class Box {
    constructor(element,value = ''){
        this.element = element;
        this.value = value;
    }
    setValue(){
        
    }
}

var tiktaktoe = new Game(
    [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ],
   'game' 
)
tiktaktoe.display()
console.log(tiktaktoe)









// var tiktaktoe = [
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0],
// ];

// const body = document.getElementsByTagName('body')[0];
// const game = document.createElement('div');
// game.id = 'game';



// for (let i = 0; i < tiktaktoe.length; i++) {
//     const line = document.createElement('div');
//     line.className = 'layer' + i;

//     game.appendChild(line)
    // body.appendChild(game)

//     var hod = 0
//     for (let y = 0; y < tiktaktoe[i].length; y++) {

//         const box = document.createElement('div');
//         if (tiktaktoe[i][y] == '1') {
//             box.innerHTML = 'X'
//         }
//         if (tiktaktoe[i][y] == '2') {
//             box.innerHTML = 'O'
//         }

//         line.appendChild(box)
//         box.className = 'cube'




//         box.onclick = function gameTiktaktoe() {
//             if (hod % 2 == 0) {
//                 tiktaktoe[i][y] = '1'
//                 box.innerHTML = 'X'
//             }
//             else {
//                 tiktaktoe[i][y] = '2'
//                 box.innerHTML = 'O'
//             }

//             if (tiktaktoe[i][y] != 0) {
//                 box.onclick = false
//             }

//             hod++;

//             checkWinner();
//         }
//     }
// }

// function checkWinner() {
//     if (tiktaktoe[0][0] == 1 && tiktaktoe[0][1] == 1 && tiktaktoe[0][2] == 1 ||
//         tiktaktoe[1][0] == 1 && tiktaktoe[1][1] == 1 && tiktaktoe[1][2] == 1 ||
//         tiktaktoe[2][0] == 1 && tiktaktoe[2][1] == 1 && tiktaktoe[2][2] == 1 ||
//         tiktaktoe[0][0] == 1 && tiktaktoe[1][0] == 1 && tiktaktoe[2][0] == 1 ||
//         tiktaktoe[0][1] == 1 && tiktaktoe[1][1] == 1 && tiktaktoe[2][1] == 1 ||
//         tiktaktoe[0][2] == 1 && tiktaktoe[1][2] == 1 && tiktaktoe[2][2] == 1 ||
//         tiktaktoe[0][0] == 1 && tiktaktoe[1][1] == 1 && tiktaktoe[2][2] == 1 ||
//         tiktaktoe[0][2] == 1 && tiktaktoe[1][1] == 1 && tiktaktoe[2][0] == 1) {
//         body.innerHTML = 'крестиков победа'
//     }
//     if (tiktaktoe[0][0] == 2 && tiktaktoe[0][1] == 2 && tiktaktoe[0][2] == 2 ||
//         tiktaktoe[1][0] == 2 && tiktaktoe[1][1] == 2 && tiktaktoe[1][2] == 2 ||
//         tiktaktoe[2][0] == 2 && tiktaktoe[2][1] == 2 && tiktaktoe[2][2] == 2 ||
//         tiktaktoe[0][0] == 2 && tiktaktoe[1][0] == 2 && tiktaktoe[2][0] == 2 ||
//         tiktaktoe[0][1] == 2 && tiktaktoe[1][1] == 2 && tiktaktoe[2][1] == 2 ||
//         tiktaktoe[0][2] == 2 && tiktaktoe[1][2] == 2 && tiktaktoe[2][2] == 2 ||
//         tiktaktoe[0][0] == 2 && tiktaktoe[1][1] == 2 && tiktaktoe[2][2] == 2 ||
//         tiktaktoe[0][2] == 2 && tiktaktoe[1][1] == 2 && tiktaktoe[2][0] == 2) {
//         body.innerHTML = 'ноликов победа'
//     }
    
// }
// function player() {
    
//     const players = body.document.createElement('div')
//     players.className = 'players'
//     const player1 = document.createElement('div');
//     player1.id = 'player1';
//     game.appendChild(player1)
//     const player2 = document.createElement('div');
//     player2.id = 'player2';
//     game.appendChild(player2)   

//     if (hod%2==0){

//     }
// }

// function winner() {

// }