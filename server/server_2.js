// SERVER 1 is for ADMIN REQUESTS

const express = require("express")
const app = express()
const adminRoute = require("./routes/adminRoute")

app.get("/", (req, res) => {
    res.json({ message: "This is server 2" })
})

app.get("/health", (req, res) => {
    res.json({ message: "Server 2 is healthy" })
})

app.use("/services", adminRoute)

app.listen(3001, () => {
    console.log("Server 2 started on port 3001")
})

