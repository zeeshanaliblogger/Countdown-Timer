// background.js

// Store active timers
let timers = [];

// Function to create a new timer
function createTimer(duration) {
  const timer = {
    id: Date.now(),
    duration,
    timeRemaining: duration,
    active: true
  };

  timers.push(timer);
  return timer;
}

// Function to update timers
function updateTimers() {
  timers.forEach((timer) => {
    if (timer.active) {
      timer.timeRemaining--;

      // Timer expired
      if (timer.timeRemaining === 0) {
        chrome.tabs.create({ url: 'timer_expired.html' });
        timer.active = false;
      }
    }
  });
}

// Start updating timers every second
setInterval(updateTimers, 1000);
