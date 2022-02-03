const html = document.querySelector("html");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggleEl = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let dl = 0;
toggleEl.addEventListener("click", () => {
  html.classList.toggle("dark");
  if (dl === 0) {
    toggleEl.innerText = "Light mode";
    dl++;
  } else {
    toggleEl.innerText = "Dark mode";
    dl--;
  }
});

function setTime() {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDay();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const hourForClock = hour % 12;

  timeEl.innerText = `${hour}:${minute}`;
  dateEl.innerHTML = `${months[month]}, ${days[day]} <span class="circle">${day}</span>`

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hourForClock,
    0,
    11,
    0,
    360
  )}deg)`;

  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minute,
    0,
    59,
    0,
    360
  )}deg)`;

  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    second,
    0,
    59,
    0,
    360
  )}deg)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

setInterval(() => {
  setTime();
}, 1000);
