const express = require('express')
const app = express()
require('./config/connection')
require('dotenv').config()
const routes = require("./config/routes")
const cookieParser = require("cookie-parser")

app.use(express.json());
app.set('view engine', 'hbs');
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.use(routes)

app.listen(process.env.PORT || 5000, (req, res) => {
    console.log(`This application run on port number ${PORT}`)
})