//Created variable to Acces the Packages
const express = require('express');
const bodyParser = require('body-parser');

//App var to acces the Express var
const app = express();
//Used to pass the data from  JS
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");

});

app.post("/", function (req, res) {
    //Gets the Values passed From the Website
    //The pareser gets the data as text
    var num1 = Number(req.body.Number1);
    var num2 = Number(req.body.Number2);
    var result = num1 + num2;

    res.send("Result is" + result);
});

app.listen(3000);