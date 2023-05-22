var button = document.getElementById("btn");
var apiKey = "20b5bbb90d949b1486cae164528772ff"

var cityVal = document.querySelector("#cityinput");
var cityList = document.querySelector("#savedcity")
var showImg = document.querySelector(".img");

//gets api info
var getWeather = function(data) {
     var lat = data[0].lat;
     var long = data[0].lon;
    var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + long + '&units=imperial&appid=' + apiKey
        fetch(apiUrl)
        .then(function (response) {
 //Current forecast
        response.json().then(function(data){
            var cityName = data.city.name
            var currDate = data.list[0].dt_txt.substr(5, 2) + '-' + data.list[0].dt_txt.substr(8, 2) + '-' + data.list[0].dt_txt.substr(0, 4);
            var temp = data.list[0].main.temp;
            var wind = data.list[0].wind.speed;
            var humidity = data.list[0].main.humidity;
            var weatherIcon = data.list[0].weather[0].icon
            var iconUrl = 'https://openweathermap.org/img/wn/' + weatherIcon + '@2x.png';
            showImg.innerHTML = "<img src=" + iconUrl + ">";
            document.querySelector(".tempeture").innerHTML = `Tempeture: `+ temp + `&deg;f`;
            document.querySelector(".wind").innerHTML = `Wind Speed: ` + wind + `Mph`;
            document.querySelector(".humidity").innerHTML = `humidity: ` + humidity + `%`;
            document.querySelector(".date"). innerHTML = currDate;
            document.querySelector(".city-name").innerHTML = cityName;

            // forecast day 1
            var currDate = data.list[0].dt_txt.substr(5, 2) + '-' + data.list[0].dt_txt.substr(8, 2) + '-' + data.list[0].dt_txt.substr(0, 4);
            var temp = data.list[0].main.temp;
            var wind = data.list[0].wind.speed;
            var humidity = data.list[0].main.humidity;
            var weatherIcon1 = data.list[0].weather[0].icon
            var iconUrl = 'https://openweathermap.org/img/wn/' + weatherIcon1 + '@2x.png';
            document.querySelector(".tempeture1").innerHTML = `Tempeture: `+ temp + `&deg;f`;
            document.querySelector(".wind1").innerHTML = `Wind Speed: ` + wind + `Mph`;
            document.querySelector(".humidity1").innerHTML = `humidity: ` + humidity + `%`;
            document.querySelector(".date-one"). innerHTML = currDate;
            document.querySelector(".img1").innerHTML = "<img src=" + iconUrl + ">";

            // day2
            var currDate = data.list[8].dt_txt.substr(5, 2) + '-' + data.list[8].dt_txt.substr(8, 2) + '-' + data.list[8].dt_txt.substr(0, 4);
            var temp = data.list[8].main.temp;
            var wind = data.list[8].wind.speed;
            var humidity = data.list[8].main.humidity;
            var weatherIcon2 = data.list[8].weather[0].icon
            var iconUrl = 'https://openweathermap.org/img/wn/' + weatherIcon2 + '@2x.png';
            document.querySelector(".tempeture2").innerHTML = `Tempeture: `+ temp + `&deg;f`;
            document.querySelector(".wind2").innerHTML = `Wind Speed: ` + wind + `Mph`;
            document.querySelector(".humidity2").innerHTML = `humidity: ` + humidity + `%`;
            document.querySelector(".date-two"). innerHTML = currDate;
            document.querySelector(".img2").innerHTML = "<img src=" + iconUrl + ">";

            //day3

            var currDate = data.list[16].dt_txt.substr(5, 2) + '-' + data.list[16].dt_txt.substr(8, 2) + '-' + data.list[16].dt_txt.substr(0, 4);
            var temp = data.list[16].main.temp;
            var wind = data.list[16].wind.speed;
            var humidity = data.list[16].main.humidity;
            var weatherIcon3 = data.list[16].weather[0].icon
            var iconUrl = 'https://openweathermap.org/img/wn/' + weatherIcon3 + '@2x.png';
            document.querySelector(".tempeture3").innerHTML = `Tempeture: `+ temp + `&deg;f`;
            document.querySelector(".wind3").innerHTML = `Wind Speed: ` + wind + `Mph`;
            document.querySelector(".humidity3").innerHTML = `humidity: ` + humidity + `%`;
            document.querySelector(".date-three"). innerHTML = currDate;
            document.querySelector(".img3").innerHTML = "<img src=" + iconUrl + ">";
            //day4
            var currDate = data.list[24].dt_txt.substr(5, 2) + '-' + data.list[24].dt_txt.substr(8, 2) + '-' + data.list[24].dt_txt.substr(0, 4);
            var temp = data.list[24].main.temp;
            var wind = data.list[24].wind.speed;
            var humidity = data.list[24].main.humidity;
            var weatherIcon4 = data.list[24].weather[0].icon
            var iconUrl = 'https://openweathermap.org/img/wn/' + weatherIcon4 + '@2x.png';
            document.querySelector(".tempeture4").innerHTML = `Tempeture: `+ temp + `&deg;f`;
            document.querySelector(".wind4").innerHTML = `Wind Speed: ` + wind + `Mph`;
            document.querySelector(".humidity4").innerHTML = `humidity: ` + humidity + `%`;
            document.querySelector(".date-four"). innerHTML = currDate;
            document.querySelector(".img4").innerHTML = "<img src=" + iconUrl + ">";
            //day5
            var currDate = data.list[32].dt_txt.substr(5, 2) + '-' + data.list[32].dt_txt.substr(8, 2) + '-' + data.list[32].dt_txt.substr(0, 4);
            var temp = data.list[32].main.temp;
            var wind = data.list[32].wind.speed;
            var humidity = data.list[32].main.humidity;
            var weatherIcon5 = data.list[32].weather[0].icon
            var iconUrl = 'https://openweathermap.org/img/wn/' + weatherIcon5 + '@2x.png';
            document.querySelector(".tempeture5").innerHTML = `Tempeture: `+ temp + `&deg;f`;
            document.querySelector(".wind5").innerHTML = `Wind Speed: ` + wind + `Mph`;
            document.querySelector(".humidity5").innerHTML = `humidity: ` + humidity + `%`;
            document.querySelector(".date-five").innerHTML = currDate;
            document.querySelector(".img5").innerHTML = "<img src=" + iconUrl + ">";
        })
     })
}; 




//local storage

var savedLocation = function(data) {
    var newLocation = {
        'city': data[0].name,
        'latitude': data[0].lat,
        'longitude': data[0].lon
    };
    if(JSON.parse(localStorage.getItem('citycoor')) == null){
        citycoor =[];
    } else {
        citycoor = JSON.parse(localStorage.getItem('citycoor'));
    }
    citycoor.push(newLocation);
    localStorage.setItem('citycoor', JSON.stringify(citycoor))


}
//adds city to html 
var addItem = function() {
    var cityInput = document.createElement('li');
    cityInput.classList.add('saved-city')
    cityList.append(cityInput)
    cityInput.innerHTML = cityVal.value;
}

// get info from weather api and all function created
var getInfo = function(event) {
    var searchCity = cityVal.value;

    var geoApi = 'https://api.openweathermap.org/geo/1.0/direct?q=' + searchCity + '&appid=' + apiKey

    fetch(geoApi)
    .then(function(response){
        if(response.ok) {
            response.json().then(function(data){
                console.log("success");
                getWeather(data);
                savedLocation(data);
                addItem();
            })
        }
    })
}

button.addEventListener('click', getInfo)

