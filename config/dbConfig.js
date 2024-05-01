const mongoose = require('mongoose')
require("dotenv").config()
const connectDB = async () => {
    return new Promise((resolve, reject) => {
        mongoose.connect("mongodb+srv://Anjali:anjali@swiptory.fdvlqup.mongodb.net/SwipTory?retryWrites=true&w=majority&appName=SwipTory").then(x => resolve("Connected to atlas")).catch(err => console.log(err))

    })
}
module.exports = connectDB
