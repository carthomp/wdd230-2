const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=35.17&lon=-106.53&units=imperial&appid=860c65469fe554218b5868385fb93531";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject)
    let temp = document.querySelector('#temp-value');
    let tempVal = jsObject.current.temp.toFixed(1);
    temp.textContent = tempVal;
    let desc = jsObject.current.weather[0].description;
    desc = desc.toUpperCase()
    document.querySelector('p#weather-descrip').innerHTML = desc;
    let humidity = document.querySelector('#humidity');
    let humidityVal = jsObject.current.humidity;
    humidity.textContent = humidityVal + "%";
  });