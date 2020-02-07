// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'
// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'

// player1 = 'scissors'  
// let ranNum = Math.random()
// let player1 = (function () {
//     if (ranNum <=0.33 ) {
//         return 'rock'
//     } 
//     else if (ranNum > 0.33 && ranNum <= 0.66) {
//         return 'paper' 
//     }
//     else if (ranNum > 0.66){ 
//         return 'scissors'
//     }    
// })()
// console.log(ranNum)
// console.log("player 2 = " + player1)

function rockPaperScissors (player1, player2) { 
if (player1 === player2)  {
    return 'draw'
    }
else if (player1 ==='rock' && player2==='scissors') { //|| player1!=='paper') {
    return 'player 1'
    }
else if (player1 ==='paper' && player2==='rock'){// || player1!=='scissors') {
    return 'player 1'
    }
else if (player1 ==='scissors' && player2==='paper') {// || player1!=='rock') {
    return 'player 1'
    }
else {
    return 'player 2'
    }
}

//console.log("player 1 = " + player1)
console.log(rockPaperScissors('scissors', 'paper'))



