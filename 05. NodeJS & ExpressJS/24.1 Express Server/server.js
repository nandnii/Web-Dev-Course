import express from "express";
const app = express();

app.listen(3000, function() {
    console.log("Server started on port 3000")
});

app.get("/", function(req, res){
    res.send("<h1>Hello</h1>");
});

app.get("/about", function(req, res){
    res.send("I'm Nandni, nice to meet!");
});

app.get("/contact", function(req, res){
    res.send("Contact me at nandnican@gmail.com");
});