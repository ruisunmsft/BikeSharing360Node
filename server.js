//var restify = require('restify');
//var config = require('./config/');
//var db = require('./db/db.sequelize');
//var glob = require('glob');

//var app = restify.createServer({ name: config.server.name });
//var port = process.env.port || config.server.port || 8080;

//// Middlewares 
//app.use(restify.fullResponse());
//app.use(restify.bodyParser());

//app.use(restify.queryParser());
//app.use(restify.authorizationParser());
//app.pre(restify.pre.sanitizePath());
//app.pre(restify.pre.pause());

//db.connect().then(function () {
//    // Import al controllers in /api/**
//    var modules = glob.sync('./api/**/*.router.*');
//    modules.forEach(function (m) { return require(m)(app); });

//    // Configure port
//    app.listen(port, function (err) {
//        if (err) {
//            console.log('Error on port: ', port);
//            return;
//        }
//        console.log('Listening on port: ', port);
//    });
//});

var express = require('express');
var path = require('path');

// Constants
var PORT = 8000;

// App
var app = express();
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname,'public')));

var items = [
    "Sign In",
    "How it Works",
	"Intelligent App",
	"Cities",
    "Our clients"
];

app.get('/', function (req, res) {
    res.render('index',{items:items});
    //res.send('Hello world from Docker Demo!');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
