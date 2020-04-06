const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/notes-Db',{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true

 });
 console.log("Connected To database .. ")

