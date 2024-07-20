let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let running = false;

function startStop() {
  if (!running) {
    running = true;
    timer = setInterval(run, 10);
    document.getElementById("startStopBtn").textContent = "Stop";
  } else {
    running = false;
    clearInterval(timer);
    document.getElementById("startStopBtn").textContent = "Start";
  }
}

function run() {
  milliseconds++;
  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  document.getElementById("display").textContent = formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatTime(milliseconds);
}

function reset() {
  clearInterval(timer);
  running = false;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("startStopBtn").textContent = "Start";
}

function formatTime(time) {
  return (time < 10) ? ("0" + time) : time;
}
