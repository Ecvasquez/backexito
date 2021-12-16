const mongoose = require('../db/Database');
const contractSchema = mongoose.Schema({
    personId:{
        type:String,
        required:true
    },
    contractType:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    initDate:{
        type:String,
        required:true
    }
    ,
    finishDate:{
        type:String,
        required:false
    },
    dependence:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    }

});
module.exports=mongoose.model('contract',contractSchema);