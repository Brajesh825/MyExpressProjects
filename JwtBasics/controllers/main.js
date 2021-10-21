// check username, password in post(login) request
// if user exist create new JWT
// send back to frontend

// setup authentication so only the request with JWT can access the dashboard

const CustomAPIError = require('../errors/custom-error')

const login = async(req,res)=>{
    const {username,password} = req.body
    // mongo
    // JOi
    // Check in the controller
    if(!username || password){
        throw new CustomAPIError('Please Provide email and password',400)
    }
    res.send('Fake Login/Register/Signup Route') 
}



const dashboard = async (req,res) =>{
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello, Brajesh`,secret:`Your lucky number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}