require('./db/connector')
const User = require('./db/models/user')

const createUser = async(name)=>{
    const sof =   new User({
        name
    })
    await sof.save()
    console.log(sof)
}
createUser('sofiene')
