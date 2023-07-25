import express, {urlencoded} from 'express';
import https from 'https';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(urlencoded({ extended: true }));


app.get("/", function(req, res){
    res.sendFile(`${__dirname}/index.html`);
});

app.post("/", function(req, res){
    const city = req.body.cityName;
    const apiKey = "b4abdcc87f459a4ed418f9e911eebe8c";
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + unit + "&appid=" + apiKey;
    
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const desc = weatherData.weather[0].description;
            const image = "https://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png";
            res.write("<h1>Temperature in " +city+ " is " + temp + " degrees Celcius.</h1>");
            res.write("<h3>The weather is currently " + desc + "</h3>");
            res.write("<img src =" + image + "></img>");
            res.send();
        })
    })
    
});

app.listen(3000, function(){
    console.log("Server running on port 3000")
});