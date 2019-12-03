var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var https = require('https');

var app = express();
var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ encoded: true}));
app.use(express.static("public"));
app.use(express.json());

//get movie

app.get('/', function(req, res){
    var url = "https://www.omdbapi.com/?s=rambo&apikey=d42aca4a";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        res.json(data['Search'][1].Year);
    });
});

http.createServer(app).listen(port, function(){
    console.log('listening on server port ' + port);
});

