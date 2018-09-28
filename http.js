var express = require('express');
var http = require('http');
var ejs = require('ejs');
var fs = require('fs');

// Create a new Express application.
var app = express();

app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true,
                            cookie: { maxAge : 200000000 }
					 }));

	
// set up a route to redirect http to https
app.get('*', function(req, res) {  
    res.redirect('https://www.epocum.com');

    // Or, if you don't want to automatically detect the domain name from the request header, you can hard code it:
    // res.redirect('https://example.com' + req.url);
})

console.log('Server started!');

app.use(express.static('.' + '/'));
http.createServer(app).listen(80);
