var api = "68f441a7850cce87d500e391411afce2"



    // Function
function getLatLong () {
    var latLong = "https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=68f441a7850cce87d500e391411afce2"
    //1. Call to the api url
    fetch (latLong)
    //2. Ask for the data to use JSON format
    .then(function(res){
        return res.json();
    }).then(function(data){
        // 3. ACTION - anything you want to do with the data, do it here!

        console.log("LATITUDE: ", data.coord.lat);

        getforecast(data.coord.lat, data.coord.lon)
    })
};
function getforecast (lat, lon) {
    var makeItRain = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=68f441a7850cce87d500e391411afce2`;
    fetch (makeItRain)
    .then(function(res){
        return res.json ();
        })
        .then (function (data){
console.log (data)
        })
}
getLatLong()
