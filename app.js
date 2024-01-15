const startButton = document.querySelector('.stopwatch__start');
const stopButton = document.querySelector('.stopwatch__stop');
const resetButton = document.querySelector('.stopwatch__reset')

const minutesElement = document.querySelector('.timer__minutes');
const secondsElement = document.querySelector('.timer__seconds');
const millisecondsElement = document.querySelector('.timer__milliseconds');

let intervalId = null;
let elapsedTime = 0; // Time in milliseconds

function startTimer() {
    intervalId = setInterval(() => {
      elapsedTime += 10; // Increment time
      updateTimerDisplay(); // Update the timer display
    }, 10);
  }
  
  function startTimer() {
  intervalId = setInterval(() => {
    elapsedTime += 10; // Increment time
    updateTimerDisplay(); // Update the timer display
  }, 10);
}

function updateTimerDisplay() {
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = elapsedTime % 1000;
  
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
  
  function stopTimer() {
    clearInterval(intervalId);
  }
  
  function resetTimer() {
    clearInterval(intervalId);
    elapsedTime = 0;

    minutesElement.textContent = "00";
    secondsElement.textContent =  "00"
    millisecondsElement.textContent = "000"

  }
  
  startButton.addEventListener('click', startTimer);
  stopButton.addEventListener('click', stopTimer);
  resetButton.addEventListener('click', resetTimer)


