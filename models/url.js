const mongoose = require("mongoose");

const Schema = mongoose.Schema

const urlSchema = new Schema({
    url: {
        type: String,
        required: true,
    },
    hash: {
        type: String,
        required: true
    },
},
{
    timestamps: true
})

module.exports = mongoose.model( "Url", urlSchema )