const mongoose = require('mongoose');

const connectDB = async() =>{
    try {
        const connect = await mongoose.connect(process.env.VITE_MONGODB_URI);
        console.log(`Successfully connected to mongodb!!! ${connect.connection.host}`)
    } catch (error) {
        console.log(`Error occured : ${error.message}`)
        process.exit(1);
    }
}

module.exports = connectDB;