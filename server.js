const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear()
})

hbs.registerHelper('screamit', (text) => {
	return text.toUpperCase()
})

app.get('/', (req, res) => {
	//res.send('<h1>Hello Express!!!</h1>');
	res.render('home.hbs', {
		pageTitle: 'Home Page',
		welcomeMsg: 'Welcome to home page'
	})
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About Page',
	});
})

app.get('/bad', (req, res) => {
	res.send({
		errorMsg: 'Unable to handle request'
	});
})

app.listen(3000, () => {
	console.log("App is running on 3000");
});