function search(event) {
  event.preventDefault();
  let textInput = document.querySelector("#search-input");
  let city = document.querySelector("#city-result");
  if (textInput.value) {
    city.innerHTML = `${textInput.value}`;
  } else {
    city.innerHTML = null;
  }
}

let searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", search);

function searchCity(city) {
  let apiKey = "4f3b0tf3219b4c7758082d0o48eabbbe";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayTemperature);
}
searchCity(textInput.value);

function displayTemperature(response) {}
