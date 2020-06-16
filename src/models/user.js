const validator = require('validator')
const mongoose = require('mongoose')

const User = mongoose.model('User',{
    fname: {
        type:String,
        required:true,
        trim:true
    },
    lname: {
        type:String,
        required:true,
        trim:true
    },
    cemail: {
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Invalid ")
            }
        }
    },
    pass: {
        type:String,
        required:true,
        trim: true,
        minlength:6,
        validate(value) {
            if(value==='password') {
                throw new Error("Password is a password")
            }
        }
    },

    cpass: {
        type:String,
        required:true,
        trim: true,
        minlength:6,
        validate(value) {
            if(value==='password') {
                throw new Error("Password is a password")
            }
        }
    },

})

module.exports = User
