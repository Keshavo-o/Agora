const express = require("express")
const router = express.Router()
const createuser = require('../controllers/user_controllers/createnewuser.js')
const loginuser = require('../controllers/user_controllers/login_user.js')

router.get("/", (req, res) => {
    // console.log("request ayi h")
    res.json({
        message: "User route connected"
    })
})

router.post("/", loginuser)

router.post('/create', createuser)
module.exports = router