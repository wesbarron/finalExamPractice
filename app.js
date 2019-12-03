const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

const app = express();
var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ encoded: true}));
app.use(express.static("public"));
app.use(express.json());

//get movie

app.get('/', function(req, res){
    res.send('<h1>Hello</h1>');
});

http.createServer(app).listen(port, function(){
    console.log('listening on server port ' + port);
});

