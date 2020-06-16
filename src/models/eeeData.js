const mongoose = require('mongoose')

const eeeData = mongoose.model('eeebooks',{
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

module.exports = eeeData

