let FirstPlayerLife = 0
let SecondPlayerLife = 0
let playerTwoWinsCount = 0
let playerOneWinsCount = 0

const FirstlifeCount = document.getElementById('FirstlifeCount')
const SecondLifeCount = document.getElementById('SecondLifeCount')
const playerTwoWins = document.getElementById('playerTwoWins')
const playerOneWins = document.getElementById('playerOneWins')

function FirstlifeColor() {

  if (FirstPlayerLife <= 20 || FirstPlayerLife <= 40) {
    FirstlifeCount.style.color = 'green'
  } if (FirstPlayerLife <= 15) {
    FirstlifeCount.style.color = 'yellow'
  } if (FirstPlayerLife <= 10) {
    FirstlifeCount.style.color = 'orange'
  } if (FirstPlayerLife <= 5) {
    FirstlifeCount.style.color = 'red'
  }
}

function secondLifeColor() {

  if (SecondPlayerLife <= 20 || SecondPlayerLife <= 40) {
    SecondLifeCount.style.color = 'green'
  } if (SecondPlayerLife <= 15) {
    SecondLifeCount.style.color = 'yellow'
  } if (SecondPlayerLife <= 10) {
    SecondLifeCount.style.color = 'orange'
  } if (SecondPlayerLife <= 5) {
    SecondLifeCount.style.color = 'red'
  }

}

// Set comander mode 
function comanderMode() {

  FirstPlayerLife = 40
  SecondPlayerLife = 40
  FirstlifeCount.innerText = FirstPlayerLife
  SecondLifeCount.innerText = SecondPlayerLife
  FirstlifeColor()
  secondLifeColor()


}

function normalMode() {

  FirstPlayerLife = 20
  SecondPlayerLife = 20
  FirstlifeCount.innerText = FirstPlayerLife
  SecondLifeCount.innerText = SecondPlayerLife
  FirstlifeColor()
  secondLifeColor()

}

// Reset life counter
function ResetLifeCounter() {

  const cofirmreset = confirm('Reset all life counter?')
  if (cofirmreset) {
    FirstPlayerLife = 0
    SecondPlayerLife = 0
    FirstlifeCount.innerText = FirstPlayerLife
    SecondLifeCount.innerText = SecondPlayerLife
    FirstlifeCount.style.color = 'white'
    SecondLifeCount.style.color = 'white'
  }
}

// increase life to left player
function IncreaseFirstPlayerLife() {
  FirstPlayerLife++;
  FirstlifeCount.innerText = FirstPlayerLife;
  FirstlifeColor()
}

// decrease life to left player and add 1+ count if wins
function DecreaseFirstPlayerLife() {
  FirstPlayerLife--;
  FirstlifeCount.innerText = FirstPlayerLife;

  if (FirstPlayerLife === 0) {
    playerTwoWinsCount++
    playerTwoWins.innerText = 'Wins: ' + playerTwoWinsCount;

  }
  FirstlifeColor()
}

// increase life to right player
function IncreaseSecondPlayerLife() {
  SecondPlayerLife++;
  SecondLifeCount.innerText = SecondPlayerLife;
  secondLifeColor()
}

// decrease life to right player and add 1+ count if wins
function DecreaseSecondPlayerLife() {
  SecondPlayerLife--;
  SecondLifeCount.innerText = SecondPlayerLife;

  if (SecondPlayerLife === 0) {
    playerOneWinsCount++
    playerOneWins.innerText = 'Wins: ' + playerOneWinsCount;

  }
  secondLifeColor()
}

// 
function PlayerOneNickname() {

  const PlayerOneNickname = document.getElementById('PlayerOneNickname').value
  document.getElementById('PlayerOneName').innerText = PlayerOneNickname
  document.getElementById('PlayerOneNickname').value = ''
}

// document.addEventListener('keypress', function (e) {

//   if (e.key === 'Enter') {

//     document.querySelector('nickNameButtonOne');
//     PlayerOneNickname()
//   }
// })

//
function PlayerTwoNickname() {
  const PlayerTwoNickname = document.getElementById('PlayerTwoNickname').value
  document.getElementById('PlayerTwoName').innerText = PlayerTwoNickname
  document.getElementById('PlayerTwoNickname').value = ''

}

// document.addEventListener('keypress', function (e) {

//   if (e.key === 'Enter') {

//     document.querySelector('nickNameButtonTwo');
//     PlayerTwoNickname()


//   }
// })

// -------------- Timer ---------------
let hh = 0
let mm = 0
let ss = 0

let time = 1000;
let cron;

function startCronometer() {
  cron = setInterval(() => { timer(); }, time)
}

function pauseCronometer() {
  clearInterval(cron);
}

function stopCronometer() {
  clearInterval(cron);
  hh = 0
  mm = 0
  ss = 0
  document.getElementById('counter').innerText = '00:00:00';
}

function timer() {
  ss++;

  if (ss === 60) {
    ss = 0;
    mm++;
    if (mm === 60) {
      mm = 0;
      hh++
    }
  }

  let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
  document.getElementById('counter').innerText = format

}


