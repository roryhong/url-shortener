const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shortUrlSchema = new Schema({
    originalUrl: {
        type: String,
        required: true,
        unique:true
    },
    shortUrl: {
        type: String,
        required: true,
        unique:true
    }
})

module.exports = mongoose.model('Url', shortUrlSchema)