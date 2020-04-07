const mongoose = require ('mongoose')
const userSchema = new mongoose.Schema({

    name : 
    {
        type :String
    }
})
userSchema.virtual('todos',{
    ref:'Task',
    localField:'_id',
    foreignField:'owner'
})
const user = mongoose.model('User',userSchema)
module.exports = user