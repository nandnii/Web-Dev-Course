import express from "express";
const app = express();
const port = 3000;

app.listen(port, function() {
    console.log("Server started on port 3000")
});

app.get("/", function(req, res){
    const today = new Date("July 29, 2023 11:11:11");
    const day = today.getDay();

    console.log(day);

    let type = "a weekday";
    let adv = "Time to work hard"

    if(day == 0 || day == 6){
        type = "weekend";
        adv = "Time to chill & sleep"
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv
    });
});