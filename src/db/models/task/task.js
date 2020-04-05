const mongoose = require("mongoose")
const taskSchema  = mongoose.Schema ({
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
    started:{
        type:boolean
    },
    important:{
        type:boolean
    },
    labels:[{type:Number,ref:'Label'}]

})
const task = mongoose.model('Task',taskSchema)