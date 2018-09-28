var express = require('express');
var https = require('https');
var ejs = require('ejs');
var fs = require('fs');
var metaget = require("metaget");
var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;

var login = '';

// Passport session setup.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

//twitter


passport.use(new TwitterStrategy({
    consumerKey: '7LTLxkpka3zV4HS8Bi8u7FBGt',
    consumerSecret: 'IvhcUaunLfR7ZfAEqJ6JYRGxf9HkIIoQqnZHTtC9KzVH2xD9Jo',
    callbackURL: "https://www.epocum.com/auth/twitter/callback",
    includeEmail: true,
   },
  function(token, tokenSecret, profile, done) {
				if (profile) {
				user = profile;
				login = 'twitter';
				
				console.log(user.displayName);
				console.log(user.id);
				console.log(user.photos);
				console.log(user.emails[0].value);
				
				return done(null, user);
				}
				else {
				return done(null, false);
				} 
 }
));
//twitter

passport.use(new FacebookStrategy({
    clientID: '506526716375279',
    clientSecret:'f5b60d7ac285e6e9fde419aa870df67b' ,
    callbackURL: 'https://www.epocum.com/auth/facebook/callback',
    profileFields: ['id', 'emails', 'name', 'displayName']

  },

 function(token, tokenSecret, profile, done) {
				if (profile) {
				user = profile;
				login = 'facebook';

				console.log(user.displayName);
				console.log(user.id);
				console.log(user.emails[0].value);

				return done(null, user);
				}
				else {
				return done(null, false);
				} 
 }
));

//facebook

// Create a new Express application.
var app = express();


app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

var options = {
  key: fs.readFileSync('./SSL/privkey.pem'),
  cert: fs.readFileSync('./SSL/cert.pem'),
  ca: fs.readFileSync('./SSL/chain.pem')
};

app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true,
                            cookie: { maxAge : 200000000 }
					 }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.all('/', function(request, response) {

	var content = fs.readFileSync('.' +'/index.html', 'utf-8');
	var compiled = ejs.compile(content);

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(compiled({
    	//id: id,
    	//name: name,
	//codice: ''

    }));


	});

app.all('/get_started', function(request, response) {

	var content = fs.readFileSync('.' +'/get_started.html', 'utf-8');
	var compiled = ejs.compile(content);

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(compiled({
    	//id: id,
    	//name: name,
	//codice: ''

    }));


	});

app.all('/news', function(request, response) {

	var content = fs.readFileSync('.' +'/news.html', 'utf-8');
	var compiled = ejs.compile(content);

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(compiled({
    	//id: id,
    	//name: name,
	//codice: ''

    }));


	});

app.all('/team', function(request, response) {

	var content = fs.readFileSync('.' +'/team.html', 'utf-8');
	var compiled = ejs.compile(content);

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(compiled({
    	//id: id,
    	//name: name,
	//codice: ''

    }));


	});

app.all('/explorer', function(request, response) {

	var content = fs.readFileSync('.' +'/explorer.html', 'utf-8');
	var compiled = ejs.compile(content);
    
	response.writeHead(200, {'Content-Type': 'text/html'});

	if (request.user.photos) {
			response.end(compiled({
				id : request.user.id,
				name : request.user.displayName, 
				img : request.user.photos[0].value,
				email : user.emails[0].value
			}));
	}else {
		    response.end(compiled({
				id : request.user.id,
				name : request.user.displayName, 
				img : 'null',
				email : user.emails[0].value
    		}));
	}

});

app.all('/profile', function(request, response) {

	var content = fs.readFileSync('.' +'/profile.html', 'utf-8');
	var compiled = ejs.compile(content);
    
	response.writeHead(200, {'Content-Type': 'text/html'});

	if (request.user.photos) {
			response.end(compiled({
				id : request.user.id,
				name : request.user.displayName, 
				img : request.user.photos[0].value,
				imgLarge : request.user.photos[0].value.replace('_normal',''),
				email : user.emails[0].value
			}));
	}else {
		    response.end(compiled({
				id : request.user.id,
				name : request.user.displayName, 
				img : 'null',
				imgLarge : 'null',
				email : user.emails[0].value
    		}));
	}

});


	
app.all('/new', function(request, response) {

	var content = fs.readFileSync('.' +'/new.html', 'utf-8');
	var compiled = ejs.compile(content);

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(compiled({
    	//id: id,
    	//name: name,
	//codice: ''

    }));


});


app.all('/api', function(request, response) {

	var content = fs.readFileSync('.' +'/api.html', 'utf-8');
	var compiled = ejs.compile(content);

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(compiled({
    	//id: id,
    	//name: name,
	//codice: ''

    }));


});

app.all('/source', function(request, response) {

	var content = fs.readFileSync('.' +'/source.html', 'utf-8');
	var compiled = ejs.compile(content);

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(compiled({
    	//id: id,
    	//name: name,
	//codice: ''

    }));


});

app.all('/learn', function(request, response) {

	var content = fs.readFileSync('.' +'/learn.html', 'utf-8');
	var compiled = ejs.compile(content);

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(compiled({
    	//id: id,
    	//name: name,
	//codice: ''

    }));


});

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback',
  passport.authenticate('twitter', { 
  
  successRedirect: '/explorer', 
  failureRedirect: '/' }
    
  ));
                                     
app.get('/auth/facebook', passport.authenticate('facebook',{scope:'email'}));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect : '/explorer', failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/explorer');
  });

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/explorer')
}
        
console.log('Website started!');

app.use(express.static('.' + '/'));
https.createServer(options,app).listen(443);
