function isAuthenticated(req, res) {
    return res.json({
        success: true
    })
}
module.exports = isAuthenticated