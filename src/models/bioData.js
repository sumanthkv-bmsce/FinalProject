const mongoose = require('mongoose')

const bioData = mongoose.model('biobooks',{
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

module.exports = bioData
