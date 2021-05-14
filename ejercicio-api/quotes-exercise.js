async function fetchQuotes() {
  await fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1", {
    headers: { Accept: "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("quotes").innerHTML = data.quotes[0].text;
      document.getElementById("quotesMobile").innerHTML = data.quotes[0].text;
    });
}

async function fetchWeather() {
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.currentConditions)
      document.getElementById("weather").innerHTML =
        data.description;
    });
}

fetchQuotes();
fetchWeather();

document.getElementById("button").addEventListener("click", fetchQuotes);