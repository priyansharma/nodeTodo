const JWT = require("jsonwebtoken")
const SECRET_KEY = "eyJhbGciOiJIUzI1NiJ9eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLC"

const authCreateTask = async (req, res, next) => {
    try{
        const isVerfiy = await JWT.verify(req.cookies.JWT, SECRET_KEY)
        if(!isVerfiy){
            res.render("../views/login/login")
            return
        }
    }catch(error){
        res.send(`<h1>Something went wrong</h1> ${error}`)
    }
    next()
}

module.exports = authCreateTask