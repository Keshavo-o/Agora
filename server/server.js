// SERVER 1 is for USER REQUESTS
const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')
//routes
const userRouter = require("./routes/userRoute")
const userAuth = require("./middlewares/userAuth.js")
//services
const isAuthenticated = require("./services/userAuthService.js")
const redisClient = require("../redis/index.js")

const app = express()
app.use(
    cors({
        origin: "*"
    })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    // console.log("request recieved at server")
    return res.json({
        message: "Agora"
    })
}
)

app.get("/health", (req, res) => {
    // console.log("request recieved at server")
    return res.json({
        message: "OK",
        health_status: "Ok"
    })
})

app.get("/api", (req, res) => {
    // console.log("request recieved at server")
    return res.json({
        message: "Server running"
    })
})
//defining routes
// app.use('/services', userAuth)//middleware for any request coming on /services
app.get("/user_auth", isAuthenticated)
app.use("/services", userRouter)


app.get("/redis-test", async (req, res) => {
    try {

        await redisClient.set("message", "Hello from Redis");

        const message = await redisClient.get("message");
        const user = await redisClient.get('name')

        res.json({
            message,
            user
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Redis error"
        });
    }
});


mongoose.connect('mongodb://localhost:27017/Agora_db')
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((err) => {
        console.log(err)
    })

// app.listen(3000, () => console.log("server1 running on port 3000"))
async function startServer() {
    try {
        await redisClient.connect();

        console.log("Redis connected");

        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });

    } catch (error) {
        console.error("Server startup failed:", error);
        process.exit(1);
    }
}

startServer()