// TIME //

const time = document.querySelector("time");

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes();

  const amPm = hour >= 12 ? "pm" : "am";

  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZero(min)} ${amPm}`;

  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n) < 10 ? "0" : "") + n;
}

showTime();

// GREETING //

const greeting = document.getElementById("greeting");

function backgroundGreeting() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // morning
    document.body.style.backgroundImage = "url('assets/morning-bg.jpg')";
    greeting.textContent = "Good morning,";
  } else if (hour < 18) {
    // afternoon
    document.body.style.backgroundImage = "url('assets/afternoon-bg.jpg')";
    greeting.textContent = "Good afternoon,";
  } else {
    // evening
    document.body.style.backgroundImage = "url('assets/evening-bg.jpg')";
    greeting.textContent = "Good evening,";
  }
}

backgroundGreeting();