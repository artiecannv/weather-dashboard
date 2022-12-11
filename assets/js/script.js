const APIkey = "945b04e321728f7351f85b9767317c51";

let searchButton = document.getElementById("srchBtn");
let inputBox = document.getElementById("inputBox");


searchButton.addEventListener("click", getWeather);

function getWeather(event, countryCode = 'US') {
    event.preventDefault();
     // Getting the current weather
     fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${inputBox.value},${countryCode}&appid=${APIkey}`).then(response => {return response.json()}).then(weatherObject => {
        console.log(weatherObject);



    
    }) 

    // Getting the future weather
    fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${inputBox.value},${countryCode}&appid=${APIkey}`).then(response => {return response.json()}).then(weatherObject => {
        console.log(weatherObject);
        
        let dateTime = new Date(weatherObject.list[4].dt * 1000);
        let date = dateTime.toLocaleDateString("en-US");
        let time = dateTime.toTimeString("it-IT");
        let location = weatherObject.city.name;
        let hiLow = [weatherObject.list[4].main.temp_max, weatherObject.list[4].main.temp_min]


        document.getElementById('date').innerHTML = dateTime;
        document.getElementById('location').innerHTML = location;
        document.getElementById('hiLow').innerHTML = hiLow

   








    }) 
   
};
