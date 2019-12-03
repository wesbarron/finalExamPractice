var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var https = require('https');
var nodeFetch = require('node-fetch');
var fetch = require('isomorphic-fetch');

var app = express();
var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ encoded: true}));
app.use(express.static("public"));
app.use(express.json());

//get movie
var url = "https://www.omdbapi.com/?s=rambo&apikey=d42aca4a";

/*
app.get('/', async function(req, res){
    var output = await fetch(url);
    var json = await output.json();
       
    res.render("index",{
         json: json
    }); 

}); */

var weatherURL = "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22";

app.get('/', async function(req, res){
    var weatherOutput = await fetch(weatherURL);
    var weatherJson = await weatherOutput.json();

    res.render("about", {
        weatherJson: weatherJson
    }); 
});

http.createServer(app).listen(port, function(){
    console.log('listening on server port ' + port);
});

