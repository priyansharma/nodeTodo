const express = require('express')
const app = express()
require('./config/connection')
require('dotenv').config()
const routes = require("./config/routes")
const cookieParser = require("cookie-parser")
const PORT = process.env.PORT || 3000

app.use(express.json());
app.set('view engine', 'hbs');
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.use(routes)

app.listen(PORT, (req, res) => {
    console.log(`This application run on port number ${PORT}`)
})