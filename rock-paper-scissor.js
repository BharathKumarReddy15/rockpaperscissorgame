let score = JSON.parse(localStorage.getItem('score')) || {
   wins : 0,
   losses : 0,
   ties : 0
};

/*if(score === null) {
   score = {
       wins : 0,
       losses : 0,
       ties : 0
   }
}*/

updateScore();

function updateScore() {
   let gamescore = document.querySelector('.gamescore');
   gamescore.innerHTML = `wins : ${score.wins} losses : ${score.losses} ties : ${score.ties}`;
}            



function reset() {
   score = {
       wins : 0,
       losses : 0,
       ties : 0
   }
   localStorage.removeItem('score');
}

function playGame(playerMove) {
   const computerMove = pickComputerMove();
   let result='';
   if(playerMove === 'rock') {
       if(computerMove === 'rock') {
           result = 'TIE.'
       }else if(computerMove ==='paper'){
           result = 'YOU LOSE!';
       }else if(computerMove === 'scissor') {
           result = 'YOU WIN!';
       }

   } else if (playerMove === 'paper') {
       if(computerMove === 'rock') {
           result = 'YOU WIN!'
       }else if(computerMove ==='paper'){
           result = 'TIE.';
       }else if(computerMove === 'scissor') {
           result = 'YOU LOSE!';
       }

   } else if(playerMove === 'scissor') {
       if(computerMove === 'rock') {
           result = 'YOU LOSE!'
       } else if (computerMove ==='paper'){
           result = 'YOU WIN!';
       }else if(computerMove === 'scissor') {
           result = 'TIE.';
       } 
   }

   if(result === 'YOU WIN!') {
       score.wins += 1;
   } else if(result === 'YOU LOSE!') {
       score.losses += 1;
   } else if(result === 'TIE.') {
       score.ties += 1;
   }

   let gameresult = document.querySelector('.gameresult');
   gameresult.innerHTML = result;

   let gamemoves = document.querySelector('.gamemoves');
   gamemoves.innerHTML =  `<table class="movetable"><tr class="tablerow"><th>YOU</th><th>COMPUTER</th></tr> <tr><td><img class="moveicon" src="${playerMove}-emoji.png"></td><td><img class="moveicon" src="${computerMove}-emoji.png"></td></tr></table>`;

   updateScore();

   localStorage.setItem('score', JSON.stringify(score));

   return result;
}


function pickComputerMove() {
   const randomNumber = Math.random();
   let computerMove = '';
   if(randomNumber >= 0 && randomNumber < 1/3) {
       computerMove = 'rock';

   } else if(randomNumber >= 1/3 && randomNumber < 2/3) {
       computerMove = 'paper';
       
   } else if(randomNumber >= 2/3 && randomNumber < 1) {
       computerMove = 'scissor';
   }
   return computerMove;
}