function search(event) {
  event.preventDefault();
  let textInput = document.querySelector(".search-bar");

  let h1 = document.querySelector("h1");
  if (textInput.value) {
    h1.innerHTML = `${textInput.value}`;
  } else {
    h1.innerHTML = null;
  }
}

let searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", search);
