const mongoose = require('mongoose')

const novelsData = mongoose.model('novelsbooks',{
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

module.exports = novelsData
