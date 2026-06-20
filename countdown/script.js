let timers_container = document.querySelector("#timers");
let timerInput = document.querySelector(".timer-input");
let titleInput = document.querySelector(".title");

let timers = [];

function addTimer() {
  let seconds = Number(timerInput.value);

  timers.push({
    id: Date.now(),
    title: titleInput.value,
    timeLeft: seconds,
    duration: seconds,
    isRunning: false,
    intervalId: null,
  });

  titleInput.value = "";
  timerInput.value = "";

  renderTimers();
}

function renderTimers() {
  timers_container.innerHTML = "";

  timers.forEach((timer) => {
    const timerHtml = `
      <div class="timer">
        <h3>${timer.title || "Timer"}</h3>
        <p>${timer.timeLeft}s</p>

        <button onclick="startTimer(${timer.id})">
          Start
        </button>

        <button onclick="stopTimer(${timer.id})">
          Stop
        </button>

        <button onclick="resetTimer(${timer.id})">
          Reset
        </button>

        <button onclick="removeTimer(${timer.id})">
          Delete
        </button>
      </div>  
    `;

    timers_container.innerHTML += timerHtml;
  });
}

function startTimer(id) {
  const timer = timers.find((t) => t.id === id);

  if (!timer || timer.isRunning) return;

  timer.isRunning = true;

  timer.intervalId = setInterval(() => {
    timer.timeLeft--;

    if (timer.timeLeft <= 0) {
      clearInterval(timer.intervalId);
      timer.isRunning = false;
      timer.timeLeft = 0;
    }

    renderTimers();
  }, 1000);
}

function stopTimer(id) {
  const timer = timers.find((t) => t.id === id);

  if (!timer) return;

  clearInterval(timer.intervalId);
  timer.isRunning = false;

  renderTimers();
}

function removeTimer(id) {
  const timer = timers.find((t) => t.id === id);

  if (timer) {
    clearInterval(timer.intervalId);
  }

  timers = timers.filter((t) => t.id !== id);
  renderTimers();
}

function resetTimer(id) {
  const timer = timers.find((t) => t.id === id);

  if (!timer) return;

  clearInterval(timer.intervalId);

  timer.timeLeft = timer.duration;
  timer.isRunning = false;

  renderTimers();
}
