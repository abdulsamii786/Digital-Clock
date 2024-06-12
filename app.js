let hoursId = document.getElementById("hoursId");
let minutesId = document.getElementById("minutesId");
let secId = document.getElementById("secId");
let indicator = document.getElementById("indicators");

function digitalClock() {
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  let period = "AM";

  if (hours >= 12) {
    period = "PM";
    if (hours > 12) {
      hours = hours - 12;
    }
  } else if (hours === 0) {
    hours = 12;
  }
  indicator.innerText = period;

  if (hours < 10) {
    hours = "0" + hours;
  }
  hoursId.innerText = hours;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  minutesId.innerText = minutes;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  secId.innerText = seconds;
}

setInterval(digitalClock, 1000);

let iconId = document.querySelector(".fa-regular");
let wrapper = document.getElementById("wrapper");

isDark = false;
function darkMode() {
  isDark = !isDark;
  if (isDark) {
    wrapper.classList.add("dark");
    iconId.className = "fa-regular fa-sun";
    iconId.style.opacity;
    iconId.style.color = "#fff";
  } else {
    wrapper.classList.remove("dark");
    iconId.className = "fa-regular fa-moon";
    iconId.style.color = "#000";
  }
}

let yearId = document.getElementById("year");
let d = new Date().getFullYear();
function years() {
  yearId.innerText = d;
}
years();
