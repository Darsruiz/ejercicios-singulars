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
      const id = data.ciudades[6].stateSky.id;
      weatherIcon(id);
    });
}

function weatherIcon(id) {
  console.log(id);
  switch (id) {
    case "23":
      document.getElementById("weatherIcons").innerHTML =
        '<i class="fas fa-cloud-rain"></i>';
      break;
    case "51":
      document.getElementById("weatherIcons").innerHTML =
        '<i class="fas fa-cloud"></i>';
      break;

    case "41":
      document.getElementById("weatherIcons").innerHTML =
        '<i class="fas fa-sun"></i>';
      break;

    case "28":
      document.getElementById("weatherIcons").innerHTML =
        '<i class="fas fa-clouds"></i>';
      break;

    case "46":
      document.getElementById("weatherIcons").innerHTML =
        '<i class="far fa-clouds"></i>';
      break;
    case "48":
      document.getElementById("weatherIcons").innerHTML =
        '<i class="far fa-thunderstorm"></i>';
      break;

    case "15":
      document.getElementById("weatherIcons").innerHTML =
        '<i class="fas fa-cloud-meatball"></i>';
      break;
    default:
      document.getElementById("weatherIcons").innerHTML = "";
      break;
  }
}
fetchQuotes();
fetchWeather();

document.getElementById("button").addEventListener("click", fetchQuotes);
