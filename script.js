const day = document.querySelector(".day");
const utcTime = document.querySelector(".time");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const dayOfTheWeek = new Date().getDay();
day.innerHTML = days[dayOfTheWeek];
const currentUtcTime = Date.now();
utcTime.innerHTML = currentUtcTime;
