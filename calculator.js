const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/Calculator_backend/index.html");
});

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var sum = num1 + num2;
    res.send("<h1>We received your input!!</h1><p>The sum of the two numbers " + num1 + " and " + num2 + " is = " + sum + "</p>")
});

app.listen(3000, function(){
    console.log("Server started on port 3000.");
});
