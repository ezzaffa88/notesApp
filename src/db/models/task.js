const mongoose = require("mongoose")

const taskSchema  = new mongoose.Schema ({
    title : {
        type : String,
        required : true
    },
    notes:{
        type:String,

    },
    startDate:{
        type : Date
    },
    dueDate:{
        type:Date
    },
    completed:{
        type: Boolean
    },
    starred:{
        type:Boolean
    },
    important:{
        type:Boolean
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    labels:[
        {
            type :Number,
            ref:'Label'
        }  
           ]

})
const task = mongoose.model('Task',taskSchema)
module.exports = task