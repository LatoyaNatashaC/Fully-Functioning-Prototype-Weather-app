function displayWeather(response) {
  let temperatureElement = Math.round(response.data.temperature.current);
  let displayTemperature = document.querySelector("#current-temperature");
  let weatherDescription = document.querySelector("#condition");
  let cityElement = document.querySelector("#city-result");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#display-time");
  let date = new Date(response.data.time * 1000);

  console.log(response);

  displayTemperature.innerHTML = `${temperatureElement}`;
  weatherDescription.innerHTML = response.data.condition.description;
  cityElement.innerHTML = response.data.city;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed} mph`;
  timeElement.innerHTML = formatDate(date);
}
function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}
function searchCity(city) {
  let apiKey = "4f3b0tf3219b4c7758082d0o48eabbbe";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeather);
}

function search(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");
  searchCity(searchInput.value);
}

let searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", search);

searchCity("Los Angeles");
