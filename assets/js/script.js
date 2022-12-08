const APIkey = "945b04e321728f7351f85b9767317c51";




function getWeather(zipCode, countryCode = 'US') {
    // Getting the future weather
    fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},${countryCode}&appid=${APIkey}`).then(response => {return response.json()}).then(weatherObject => {
        console.log(weatherObject);

    // let dateTime = new Date(weatherObject.list[i].dt * 1000);
    // let date = dateTime.toLocaleDateString("en-US");
    // let time = dateTime.toTimeString("it-IT");

    }) 
    // Getting the current weather
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${APIkey}`).then(response => {return response.json()}).then(weatherObject => {
        console.log(weatherObject);

    // let dateTime = new Date(weatherObject.list[i].dt * 1000);
    // let date = dateTime.toLocaleDateString("en-US");
    // let time = dateTime.toTimeString("it-IT");

    }) 
};

getWeather(82604);