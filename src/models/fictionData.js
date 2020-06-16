const mongoose = require('mongoose')

const fictionData = mongoose.model('fictions',{
    title: {
        type:String,
        required:true,
        trim:true
    },
    author: {
        type:String,
        required:true,
        trim:true
    },
    pdf: {
        type:String,
        required:true,
        trim:true
    },
    amazon: {
        type:String,
        required:true,
        trim:true
    }

})

module.exports = fictionData
