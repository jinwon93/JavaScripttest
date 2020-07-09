
const weather = document.querySelector(".js-weather");
const API_KEY = "0e2d0dc3e59fbb22e64ff983b7e9a0c7";
const COORDS = "coords";


function getWeather(lat,lng){
    fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`
    })
}


function saveCoords(coordsObj){
    localStorage.setItem(COORDS , JSON.stringify(coordsObj));
}


function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoErro(){
    console.log('niononon!!')
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces ,handleGeoErro );
}

function loadCoords(){
    const loadedCoords =localStorage.getItem(COORDS);
    if ( loadedCoords === null) {
        askForCoords();
    }else{
         const parsedCoords = JSON.parse(loadedCoords);
         console.log(parsedCoords);
         getWeather (parsedCoords.latitude,parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();