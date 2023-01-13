const APIkey = "945b04e321728f7351f85b9767317c51";
let searchButton = document.getElementById("srchBtn");
let inputBox = document.getElementById("inputBox");

searchButton.addEventListener("click", getWeather);

function getWeather(event, countryCode = "US") {
  event.preventDefault();
  // Getting the current weather
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${inputBox.value},${countryCode}&appid=${APIkey}&units=imperial`
  )
    .then((response) => {
      return response.json();
    })
    .then((weatherObject) => {
      console.log(weatherObject);
      let currentDate = new Date(weatherObject.dt * 1000);
      let currentDateEl = `${
        currentDate.getMonth() + 1
      }/${currentDate.getDate()}/${currentDate.getFullYear()}`;
      let location = weatherObject.name;
      let currentTemp = [
        "Current Temperature is:" + " " + weatherObject.main.temp + "&#8457;",
      ];
      let currentHumid =
        "Humidity is:" + " " + weatherObject.main.humidity + "%";
      let currentWind = weatherObject.wind.speed + "mph";
      let currentIcon = `http://openweathermap.org/img/wn/${weatherObject.weather[0].icon}@2x.png`;

      document.getElementById("location").innerHTML = location;
      document.getElementById("currentDate").innerHTML = currentDateEl;
      document.getElementById("currentTemp").innerHTML = currentTemp;
      document.getElementById("currentHumid").innerHTML = currentHumid;
      document.getElementById("currentWind").innerHTML = currentWind;
      document.getElementById("current-icon").src = currentIcon;
    });

  // Getting the future weather
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?zip=${inputBox.value},${countryCode}&appid=${APIkey}&units=imperial`
  )
    .then((response) => {
      return response.json();
    })
    .then((weatherObject) => {
      console.log(weatherObject);

        
      
      //   let weatherIcon = [weatherObject.list[4].weather.icon];
      
      //   document.getElementById("humid").innerHTML = humidity;
      //   document.getElementById("weatherIcon").innerHTML = weatherIcon;

      let fiveDayCards = "";

      //Loop to dynamically load the 5 day forecast cards
      for (let index = 4; index <= 36; index += 8) {
        let currentDate = new Date(weatherObject.list[index].dt * 1000);
        let currentDateEl = `${
          currentDate.getMonth() + 1
        }/${currentDate.getDate()}/${currentDate.getFullYear()}`;
        let highTemp = "High Temp:" + " " + weatherObject.list[index].main.temp_max;
        let lowTemp = "Low Temp:" + " " + weatherObject.list[index].main.temp_min;
        let humidity = "Humidity:" + " " + weatherObject.list[index].main.humidity + "%";
        let windSpeed = "Wind Speed:" + " " + weatherObject.list[index].wind.speed;
        
        let currentDiv = `<div class="card" style="width: 18rem;">
        <img src="http://openweathermap.org/img/wn/${weatherObject.list[index].weather[0].icon}.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${currentDateEl}</h5>
          <ul class="card-text">
          <li>${highTemp} ${lowTemp}</li>
            <li>${humidity}</li>
            <li>${windSpeed}</li>
          </ul>  
        </div>
      </div>`;
        fiveDayCards += currentDiv;
      }
      document.getElementById("5day").innerHTML = fiveDayCards;
    });
}
