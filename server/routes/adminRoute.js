const express = require("express")

const router = express.Router()

router.post("/login", (req, res) => {
    console.log(req.body)
    return res.json({
        success: true,
        message: "Login successful"
    })
})

module.exports = router