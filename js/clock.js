const [daysEl, hoursEl, minutesEl, secondsEl] = Array.from(
  document.querySelector(".countdown").children
).map((el) => el.children[0]);

const targetTime = new Date("2025-07-21T15:30:00");

function updateCountdown() {
  const diffInSeconds = Math.abs(Date.now() - targetTime) / 1000;
  const days = Math.floor(diffInSeconds / 60 / 60 / 24);
  const hours = Math.floor((diffInSeconds / 60 / 60) % 24);
  const minutes = Math.floor((diffInSeconds / 60) % 60);
  const seconds = Math.floor(diffInSeconds % 60);

  if (daysEl.innerText != days) daysEl.innerText = days;
  if (hoursEl.innerText != hours) hoursEl.innerText = hours;
  if (minutesEl.innerText != minutes) minutesEl.innerText = minutes;
  if (secondsEl.innerText != seconds) secondsEl.innerText = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);
