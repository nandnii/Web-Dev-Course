import express from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(express.urlencoded({extended: true}));
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// SIMPLE CALCULATOR
app.get("/", function(req, res){
    res.sendFile(`${__dirname}/index.html`);
});

app.post("/", function(req, res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1+num2;
    res.send("Addition is " + result);
});

// BMI CALCULATOR
app.get("/bmicalculator", function(req, res){
    res.sendFile(path.join(__dirname + "/bmiCalculator.html"));
});

app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.w);
    var height = parseFloat(req.body.h);
    var bmi = weight / (height*height);
    res.send("Your BMI is " + bmi);
});

app.listen(3000, function() {
    console.log("Server started on port 3000")
});