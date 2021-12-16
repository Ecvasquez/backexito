const mongoose = require('../db/Database');
const applicationSchema = mongoose.Schema({
    personId:{
        type:String,
        required:true
    },
    applicationType:{
        type:String,
        required:true
    },
    initApplication:{
        type:String,
        required:true
    },
    finishApplication:{
        type:Date,
        required:true
    },
    justification:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model('application',applicationSchema);