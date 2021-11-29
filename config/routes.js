const express = require("express")
const router = new express.Router()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const registerController = require('../api/controllers/registerController')
const loginController = require('../api/controllers/loginController')
const makeTodos = require('../api/controllers/makeTodoController')
const authentication = require('../api/middleware/authentication')
const getUserDataController = require("../api/controllers/getUserDataController")
const taskDeleteController = require("../api/controllers/taskDeleteController")

router.get("/", (req, res) => {
    res.render("login/login", {
        stacks: "Made with - Node JS, Express JS, Mongo DB"
    })
})
router.get("/signup", (req, res) => {
    res.render("signup/signup")
})
router.get("/dashboard", (req, res) => {
    res.render("dashboard/dashboard")
})
router.get("/account-created", (req, res) => {
    res.render("accontCreated/accountCreated")
})
router.post("/login", urlencodedParser, loginController)
router.post("/register", urlencodedParser, registerController)
router.post("/create", urlencodedParser, authentication, makeTodos)
router.get("/getdata", urlencodedParser, getUserDataController)
router.get("/taskdelete", urlencodedParser, taskDeleteController)

router.get("*", (req, res) => {
    res.render("404/404")
})

module.exports = router