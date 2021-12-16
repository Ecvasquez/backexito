const mongoose = require('../db/Database');
const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    personId:{
        type:String,
        required:true
    }

});
module.exports=mongoose.model('user',userSchema);