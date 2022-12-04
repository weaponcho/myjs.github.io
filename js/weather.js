const API_KEY = "f294b162bbd99e08d2ff527d8e2eb49c"
function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //console.log("You live in ", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText =  `${data.weather[0].main} / ${data.main.temp}`;
    });

}
function onGeoErr(){
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoErr);


// {
//   "coord":{
//     "lon":127.0907,
//     "lat":37.4866
//   },
//   "weather":[{
//     "id":803,
//     "main":"Clouds",
//     "description":"broken clouds",
//     "icon":"04n"
//   }],
//   "base":"stations",
//   "main":{
//     "temp":270.09,
//     "feels_like":267.84,
//     "temp_min":268.94,
//     "temp_max":270.84,
//     "pressure":1032,
//     "humidity":32
//   },
//   "visibility":10000,
//   "wind":{
//     "speed":1.54,
//     "deg":330
//   },
//   "clouds":{
//     "all":75
//   },
//   "dt":1670154126,
//   "sys":{
//     "type":1,
//     "id":8096,
//     "country":"KR",
//     "sunrise":1670106598,
//     "sunset":1670141621
//   },
//   "timezone":32400,
//   "id":6571507,
//   "name":"Samjeon-dong",
//   "cod":200
// }