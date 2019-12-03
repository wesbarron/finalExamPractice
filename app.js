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

  
app.get('/', async function(req, res){
    var output = await fetch(url);
    var json = await output.json();
    

    for(var i = 0; i < json.length; i++){
        var title = json['Search'][i].Title;
        var poster = json['Search'][i].Poster;
        var year = json['Search'][i].Year; 
    
        res.send(
         
        `<div class="container">
            <div class="row">
                <div class="col-sm">
                <h1>${title[i]}</h1>
                <img src="${poster[i]}">
                <p>${year[i]}</p>
                </div>
            </div>
        </div>`
        
    );
        }
    /*   
    res.render("index",{
         
        title: title,
        poster: poster,
        year: year
        
    }); */

});

http.createServer(app).listen(port, function(){
    console.log('listening on server port ' + port);
});

