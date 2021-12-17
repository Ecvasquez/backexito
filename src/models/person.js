const mongoose = require('../db/Database');
const personSchema = mongoose.Schema({
    document:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
    ,
    birthDate:{
        type:String,
        required:true
    },
    birthCity:{
        type:String,
        required:true
    },
    telephone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    residenceCity:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    bank:{
        type:String,
        required:true
    },
    accountType:{
        type:String,
        required:true
    },
    accountNumber:{
        type:String,
        required:true
    }

});
module.exports=mongoose.model('people',personSchema);