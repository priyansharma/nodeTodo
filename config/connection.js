const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(`mongodb://${process.env.DB_DOMAIN}:${process.env.DB_PORT}/todoApp`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Database connection succesful"))
.catch(err => console.log("database not connected", err))