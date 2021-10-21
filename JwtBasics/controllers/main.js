// check username, password in post(login) request
// if user exist create new JWT
// send back to frontend

// setup authentication so only the request with JWT can access the dashboard

const CustomAPIError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')

const login = async(req,res)=>{
    const {username,password} = req.body
    // mongose validation
    // JOi
    // Check in the controller
    if(!username || !password){
        throw new CustomAPIError('Please Provide email and password',400)
    }
    // just for demo
    const id = new Date().getDate()
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({msg:`user created`,token: token})
}



const dashboard = async (req,res) =>{
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello, Brajesh`,secret:`Your lucky number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}