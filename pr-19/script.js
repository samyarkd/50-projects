const html = document.querySelector("html");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggleEl = document.querySelector(".toggle");
const clockEl = document.querySelector(".clock");

for (let i = 1; i < 13; i++) {
  const spanEl = document.createElement("span");
  spanEl.classList.add("numbers");
  spanEl.innerHTML = `<span>${i}</span>`;
  clockEl.append(spanEl);
}

let deg = 6;

for (let i = 1; i < 60; i++) {
  // if (i % 5 !== 0) {
  const spanEl = document.createElement("span");
  spanEl.classList.add("numbers", "minutes");
  spanEl.innerHTML = `<span>${i}</span>`;
  spanEl.style.transform = `rotate(${deg}deg)`;
  spanEl.firstChild.style.transform = `rotate(${-deg}deg)`;
  clockEl.append(spanEl);
  // }
  deg = deg + 6;
}

const numbers = document.querySelectorAll(".numbers");

const hourNeedle = document.createElement("div");
hourNeedle.classList.add("needle", "hour");
const minuteNeedle = document.createElement("div");
minuteNeedle.classList.add("needle", "minute");
const secondNeedle = document.createElement("div");
secondNeedle.classList.add("needle", "second");
const centerPoint = document.createElement("div");
centerPoint.classList.add("center-point");
clockEl.appendChild(hourNeedle);
clockEl.appendChild(minuteNeedle);
clockEl.appendChild(secondNeedle);
clockEl.appendChild(centerPoint);
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

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
  dateEl.innerHTML = `${months[month]}, ${days[day]} <span class="circle">${day}</span>`;

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
  const hourForShow =
    String(hourForClock) === "0" ? "12" : String(hourForClock);

  numbers.forEach((number) => {
    if (
      number.innerText === hourForShow &&
      !number.classList.contains("minutes")
    ) {
      number.firstChild.style.opacity = "1";
    }
    if (
      number.innerText === String(minute) &&
      number.classList.contains("minutes")
    ) {
      number.firstChild.style.opacity = "1";
    }
    if (
      number.innerText === String(second) &&
      number.classList.contains("minutes")
    ) {
      number.firstChild.style.opacity = "1";
    }

    if (
      number.innerText !== hourForShow &&
      number.innerText !== String(minute) &&
      number.innerText !== String(second)
    ) {
      number.firstChild.style.opacity = "0";
    }
  });
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

setInterval(() => {
  setTime();
}, 1000);
