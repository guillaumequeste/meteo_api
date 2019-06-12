var city = "Barcelona";

$.getJSON(
    "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&lang=fr&appid=51fc8505d55fe845e4c757ea6b9ff0cf",
    function(data) {
        console.log(data);

        var dt0 = data.list[0].dt_txt;
        var icon0 = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";
        var temp0 = Math.floor(data.list[0].main.temp);
        var weather0 = data.list[0].weather[0].description;
        var humidity0 = Math.floor(data.list[0].main.humidity)

        $("#dt0").append(dt0);
        $("#icon0").attr("src", icon0);
        $("#weather0").append(weather0);
        $("#temp0").append("Température: " + temp0 + "°C ");
        $("#humidity0").append("Humidité : " + humidity0 + "%");

        var dt1 = data.list[1].dt_txt;
        var icon1 = "http://openweathermap.org/img/w/" + data.list[1].weather[0].icon + ".png";
        var temp1 = Math.floor(data.list[1].main.temp);
        var weather1 = data.list[1].weather[0].description;
        var humidity1 = Math.floor(data.list[1].main.humidity)

        $("#dt1").append(dt1);
        $("#icon1").attr("src", icon1);
        $("#weather1").append(weather1);
        $("#temp1").append("Température: " + temp1 + "°C ");
        $("#humidity1").append("Humidité : " + humidity1 + "%");

        var dt2 = data.list[2].dt_txt;
        var icon2 = "http://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png";
        var temp2 = Math.floor(data.list[2].main.temp);
        var weather2 = data.list[2].weather[0].description;
        var humidity2 = Math.floor(data.list[2].main.humidity)

        $("#dt2").append(dt2);
        $("#icon2").attr("src", icon2);
        $("#weather2").append(weather2);
        $("#temp2").append("Température: " + temp2 + "°C ");
        $("#humidity2").append("Humidité : " + humidity2 + "%");

        var dt3 = data.list[3].dt_txt;
        var icon3 = "http://openweathermap.org/img/w/" + data.list[3].weather[0].icon + ".png";
        var temp3 = Math.floor(data.list[3].main.temp);
        var weather3 = data.list[3].weather[0].description;
        var humidity3 = Math.floor(data.list[3].main.humidity)

        $("#dt3").append(dt3);
        $("#icon3").attr("src", icon3);
        $("#weather3").append(weather3);
        $("#temp3").append("Température: " + temp3 + "°C ");
        $("#humidity3").append("Humidité : " + humidity3 + "%");

        var dt4 = data.list[4].dt_txt;
        var icon4 = "http://openweathermap.org/img/w/" + data.list[4].weather[0].icon + ".png";
        var temp4 = Math.floor(data.list[4].main.temp);
        var weather4 = data.list[4].weather[0].description;
        var humidity4 = Math.floor(data.list[4].main.humidity)

        $("#dt4").append(dt4);
        $("#icon4").attr("src", icon4);
        $("#weather4").append(weather4);
        $("#temp4").append("Température: " + temp4 + "°C ");
        $("#humidity4").append("Humidité : " + humidity4 + "%");

        var dt5 = data.list[5].dt_txt;
        var icon5 = "http://openweathermap.org/img/w/" + data.list[5].weather[0].icon + ".png";
        var temp5 = Math.floor(data.list[5].main.temp);
        var weather5 = data.list[5].weather[0].description;
        var humidity5 = Math.floor(data.list[5].main.humidity)

        $("#dt5").append(dt5);
        $("#icon5").attr("src", icon5);
        $("#weather5").append(weather5);
        $("#temp5").append("Température: " + temp5 + "°C ");
        $("#humidity5").append("Humidité : " + humidity5 + "%");
    }
);

var city2 = "Memphis";

$.getJSON(
    "http://api.openweathermap.org/data/2.5/weather?q=" + city2 + "&units=metric&lang=fr&appid=51fc8505d55fe845e4c757ea6b9ff0cf",
    function(data) {
        console.log(data);

        var icon2 = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var temp2 = Math.floor(data.main.temp);
        var weather2 = data.weather[0].description;
        var humidity2 = Math.floor(data.main.humidity)

        $(".icon2").attr("src", icon2);
        $(".weather2").append(weather2);
        $(".temp2").append("Température : " + temp2 + "°C");
        $(".humidity2").append("Humidité : " + humidity2 + "%");
    }
);