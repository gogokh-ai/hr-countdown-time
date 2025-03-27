// let time = document.querySelectorAll(".time");
// console.log(time);

let day = document.querySelector(".day");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

let date = new Date("March 31, 2025, 00:00:00").getTime();
// console.log(date);

// let newDate = new Date().getTime();
// console.log(newDate);

// let miliSeconds = date - newDate;

function time() {
  const timeInterval = setInterval(() => {
    let newDate = new Date().getTime();
    let miliSeconds = date - newDate;
    let leftSeconds = Math.floor(miliSeconds / 1000) % 60;
    let leftMinutes = Math.floor(miliSeconds / 60 / 1000) % 60;
    let leftHours = Math.floor(miliSeconds / 60 / 60 / 1000) % 24;
    let leftDay = Math.floor(miliSeconds / 24 / 60 / 60 / 1000);

    if (miliSeconds > 0) {
      seconds.textContent = leftSeconds;
      minutes.textContent = leftMinutes;
      hours.textContent = leftHours;
      day.textContent = leftDay;
    }
  }, 1000);
}

time();

// console.log(seconds.textContent);
