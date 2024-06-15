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
