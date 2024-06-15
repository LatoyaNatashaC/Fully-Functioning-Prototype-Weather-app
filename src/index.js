function displayWeather(response) {
  let temperatureElement = Math.round(response.data.temperature.current);
  let displayTemperature = document.querySelector("#current-temperature");

  let weatherDescription = document.querySelector("#condition");

  let cityElement = document.querySelector("#city-result");

  let humidityElement = document.querySelector("#humidity");

  let windSpeed = document.querySelector("#wind-speed");

  console.log(response.data);
  windSpeed.innerHTML = `${response.data.wind.speed} mph`;

  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

  cityElement.innerHTML = response.data.city;

  weatherDescription.innerHTML = response.data.condition.description;

  displayTemperature.innerHTML = `${temperatureElement}`;
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
