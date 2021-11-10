const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[80,'Task name can not be more than 80 characters long']
    },
    username:{
        type:String,
        required:[true,'must provide Username'],
        trim:true,
        maxlength:[50,'Username can not be more than 50 characters long']
    },
    password:{
        type:String,
        required:[true,'must provide Password']
    }
})

module.exports = mongoose.model('User',UserSchema)