require('dotenv/config');

module.exports = {
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
    db: process.env.MONGO_DB
}
