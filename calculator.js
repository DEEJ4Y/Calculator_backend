const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var sum = num1 + num2;
    res.send("<h1>We received your input!!</h1><p>The sum of the two numbers " + num1 + " and " + num2 + " is = " + sum + "</p>")
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height * height);
    
    res.send("<p>Your Weight: " + weight + "</p><p>Your Height: " + height + "</p><p><strong>Your BMI: " + bmi + "</strong></p>");
});

app.listen(3000, function(){
    console.log("Server started on port 3000.");
});