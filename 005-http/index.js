const http = require("http");
const config = require("./config");

const city = process.argv[2];
const url = `http://api.weatherstack.com/current?access_key=${config.token}&query=${encodeURIComponent(city)}`;


http.get(url, (res) => {
    let data = "";

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        const weatherData = JSON.parse(data);
        console.log(weatherData);
    });

}).on('error', (err) => {
        console.error(`Error: ${err.message}`);
    });
