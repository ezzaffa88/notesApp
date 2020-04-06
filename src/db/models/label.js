const mongoose = require("mongoose")
const labelSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    handle:{
        type:String
    },
    title:{
        type:String
    },
    color:{
        type:String
    },
    
})
const label = mongoose.model('Label',labelSchema)
module.exports = label