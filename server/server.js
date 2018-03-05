const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const moment = require('moment');
const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

//api goes here

app.get('/api/:name', (req,res) => {
    console.log(req.params.name);
    const search = req.params.name;
    axios
    .get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5f55cc42bc5e52c998955895c60a9cb6&units=imperial`)
    .then(r => res.send(r.data))
    .catch(err => res.status(500).send('did not go through vy'));
})

module.exports = app;

// 5f55cc42bc5e52c998955895c60a9cb6

// api.openweathermap.org/data/2.5/weather?q={city name}

// api.openweathermap.org/data/2.5/weather?q={city name},{country code}

// Parameters:
// q city name and country code divided by comma, use ISO 3166 country codes