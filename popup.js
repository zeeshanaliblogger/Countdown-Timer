// popup.js

document.addEventListener('DOMContentLoaded', function () {
  const startBtn = document.getElementById('startBtn');

  startBtn.addEventListener('click', function () {
    const duration = parseInt(document.getElementById('duration').value, 10);
    if (duration > 0) {
      chrome.extension.getBackgroundPage().createTimer(duration);
    }
  });
});
