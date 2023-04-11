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

function showTemperature(response) {
  let tempElement = document.querySelector("#current-temperature");

  celsiusTemperature = response.data.main.temp;

  tempElement.innerHTML = Math.round(response.data.main.temp);
}

let cityElement = document.querySelector(".city");
cityElement.innerHTML = "Nairobi";

let timeElement = document.querySelector("#current-time");
let date = new Date();
timeElement.innerHTML = formatDate(date);

let apiKey = `c49ac0d4966a15e494a3ad92063a514f`;
let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?`;
let apiUrl = `${apiEndpoint}q=Nairobi&appid=${apiKey}&units=metric`;

function showFahrenheitTemp(event) {
  event.preventDefault();
  fahrenheitLink.classList.add("active");
  celsiusLink.classList.remove("active");
  let currentTemp = document.querySelector("#current-temperature");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  currentTemp.innerHTML = Math.round(fahrenheitTemperature);
}

function showCelsiusTemp(event) {
  event.preventDefault();
  fahrenheitLink.classList.remove("active");
  celsiusLink.classList.add("active");
  let currentTemp = document.querySelector("#current-temperature");
  currentTemp.innerHTML = Math.round(celsiusTemperature);
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsiusTemp);

let celsiusTemperature = null;

axios.get(apiUrl).then(showTemperature);
