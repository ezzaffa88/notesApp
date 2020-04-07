
    const auth = (req,res,next)=>{
        // extract token from headers authorisation 
        //after checking that the token exists in the database and the user is authenticated
       // console.log("user authenticated succesfully")

        req.user = {
            id : '5e8cc587137e8e4f343149c9'
        }

        next()
}
module.exports = auth