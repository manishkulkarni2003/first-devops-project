const mongoose = require('mongoose')

const mongoDbUrl = 'mongodb://localhost:27017/'
const connectDb = async () => {
    try {
        await mongoose.connect(mongoDbUrl)
        console.log("Connected to Db")
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}



module.exports = connectDb