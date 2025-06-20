const mongoose = require('mongoose');

const mongoDbUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/mydb';

const connectDb = async () => {
    try {
        await mongoose.connect(mongoDbUrl);
        console.log("✅ Connected to DB");
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err.message);
        process.exit(1);
    }
};

module.exports = connectDb;
