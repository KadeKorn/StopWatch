const startButton = document.querySelector('.stopwatch__start');
const stopButton = document.querySelector('.stopwatch__stop');
const resetButton = document.querySelector('.stopwatch__reset')

const minutesElement = document.querySelector('.timer__minutes');
const secondsElement = document.querySelector('.timer__seconds');
const millisecondsElement = document.querySelector('.timer__milliseconds');

let intervalId = null;
let elapsedTime = 0; // Time in milliseconds



function updateTimerDisplay() {
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = elapsedTime % 1000;
    
    setTimerDisplay(minutes, seconds, milliseconds);
}

function setTimerDisplay(minutes, seconds, milliseconds) {
    minutesElement.textContent = padWithZero(minutes, 2);
    secondsElement.textContent = padWithZero(seconds, 2);
    millisecondsElement.textContent = padWithZero(milliseconds, 3);
}


function padWithZero(number, length) {
    let str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}


function startTimer() {
    intervalId = setInterval(() => {
      elapsedTime += 10; // Increment time
      updateTimerDisplay(); // Update the timer display
      startButton.disabled = true;  // Re-enable the start button

    }, 10);
  }


  function stopTimer() {
    clearInterval(intervalId);
    startButton.disabled = false;  // Re-enable the start button
  }
  
  function resetTimer() {
    clearInterval(intervalId);
    elapsedTime = 0;
    startButton.disabled = false;  // Re-enable the start button

    setTimerDisplay(0,0,0)

  }
  
  startButton.addEventListener('click', startTimer);
  stopButton.addEventListener('click', stopTimer);
  resetButton.addEventListener('click', resetTimer)


