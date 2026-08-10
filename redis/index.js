const { createClient } = require("redis");

const redis = createClient({
    url: "redis://localhost:6379"
});

redis.on("error", (err) => {
    console.error("Redis Error:", err);
});
redis.on("connect", () => {
    console.log("Redis connecting...");
});

redis.on("ready", () => {
    console.log("Redis ready");
});

redis.on("reconnecting", () => {
    console.log("Redis reconnecting...");
});
async function main() {
    await redis.connect();

    console.log("Redis connected!");

    await redis.set("name", "Keshav");

    const name = await redis.get("name");

    console.log("Name:", name);

    await redis.quit();
}

module.exports = redis