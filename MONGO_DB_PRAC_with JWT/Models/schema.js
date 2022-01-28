const mongoose = require('mongoose');

const postschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
},{
    collection:'blogs'
});

module.exports = mongoose.model('Blogs',postschema);