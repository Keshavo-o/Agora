const users = require('../../models/usermodel')
async function createuser(req, res) {
    const { name, email, password, confirmPassword } = req.body
    //validation
    if (password != confirmPassword) {
        return res.json({
            success: false,
            message: 'passwords dont match'
        })
    }
    //checking if all fields are filled
    if (!name || !email || !password || !confirmPassword) {
        return res.json({
            success: false,
            message: "All fields are required"
        })
    }
    const existingUser = await users.findOne({ email })
    if (existingUser) {
        return res.json({
            success: false,
            message: "Email already exists"
        })
    }

    //BYCRYPTING PASSWORD


    const user = await users.create({
        displayName: name,
        email,
        password
    })
    return res.json({
        success: true,
        message: 'user created'
    })
}
module.exports = createuser