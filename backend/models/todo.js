const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    text:{
        type:STRING,
        required: true
    },
    completed:{
        type:Boolean,
        required:true
    }
},
{timestamps:true});

module.exports= todoSchema;