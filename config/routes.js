const express = require("express")
const router = new express.Router()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const registerController = require('../controllers/registerController')
const loginController = require('../controllers/loginController')
const makeTodos = require('../controllers/makeTodoController')
const authentication = require('../middleware/authentication')
const getUserDataController = require("../controllers/getUserDataController")
const taskDeleteController = require("../controllers/taskDeleteController")

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
router.delete("/taskdelete", authentication, taskDeleteController)

router.get("*", (req, res) => {
    res.render("404/404")
})

module.exports = router