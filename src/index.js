function search(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city-result");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", search);
