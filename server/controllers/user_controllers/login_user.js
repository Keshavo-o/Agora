const users = require("../../models/usermodel")
async function loginuser(req, res) {
    // console.log(req.body)
    const { email, password } = req.body
    const existingUser = await users.findOne({ email })
    if (!existingUser) {
        return res.json({
            success: false,
            message: "User not found"
        })
    }
    // const match = await bcrypt.compare(password, existingUser.password)
    // if (!match) {
    //     return res.json({
    //         success: false,
    //         message: "Incorrect password"
    //     })
    // }
    if (existingUser.password === password) {
        return res.json({
            success: true,
            message: "Login successful"
        })
    }
    return res.json({
        success: false,
        message: "Incorrect password"
    })
}
module.exports = loginuser