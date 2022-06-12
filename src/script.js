// feature 1
let now = new Date();
let h2 = document.querySelector("h2");
let date = now.getDate();

let hours = now.getHours();
{
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = days[now.getDay()];
h2.innerHTML = `${day} and ${hours}:${minutes}`;

// feature 2
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;

  let units = "metric";
  let apiKey = "239db02d481f8f5314c32178c9445007";
  let endPoint = "https://api.openweathermap.org/data/2.5/weather?q=";
  let apiUrl = `${endPoint}${searchInput.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemp);
}
let form = document.querySelector("#city-search");
form.addEventListener("submit", search);

function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${temperature}°C`;
}

// feature 3

function convertInCelsius(event) {
  event.preventDefault();
  let celsiusTemp = Math.round(((65 - 32) * 5) / 9);
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = `${celsiusTemp}° `;
}

let celsius = document.querySelector("#celsius-link");

celsius.addEventListener("click", convertInCelsius);

function convertInFahrenheit(event) {
  event.preventDefault();
  let fahrenheitTemp = 65;
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = `${fahrenheitTemp}° `;
}

let fahrenheit = document.querySelector("#fahrenheit-link");

fahrenheit.addEventListener("click", convertInFahrenheit);
