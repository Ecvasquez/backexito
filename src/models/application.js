const mongoose = require('../db/Database');
const applicationSchema = mongoose.Schema({
    personId:{
        type:mongoose.Schema.ObjectId, 
        ref: 'person',
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
        type:String,
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