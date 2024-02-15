const mongoose = require('mongoose')
const userScheme = new mongoose.Schema({
    text:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('todo',userScheme)