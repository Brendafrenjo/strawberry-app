function formatDate(time) {
  days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hour}:${minutes}`;
}

let cityElement = document.querySelector(".city");
cityElement.innerHTML = "Nairobi";

let timeElement = document.querySelector("#current-time");
let date = new Date();
timeElement.innerHTML = formatDate(date);
