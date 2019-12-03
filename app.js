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
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    });

app.get('/', function(req, res){
    
        res.render("index", {
            title: data['Search'][0].Title
        });
});

http.createServer(app).listen(port, function(){
    console.log('listening on server port ' + port);
});

