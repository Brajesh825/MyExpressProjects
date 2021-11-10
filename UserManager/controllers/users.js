const User = require('../models/user')

const createUser = async (req,res)=>{
    try {

        const {name,username,password}=req.body
        const user = await User.create({name,username,password})
        // console.log(user);
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({msg:error})
    } 
}

const getUser = async (req,res)=>{
    try {
        const {id:userID}=req.params
        let user = await User.findOne({_id:userID})
        
        const {_id,name,username} = user; 
        // console.log(_id);
        if(!_id){
            return res.status(404).json({msg:`No user with id : ${_id}`})
        }
        res.status(200).json({_id,name,username})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const deleteUser = async (req,res)=>{
    try {
        const {id:userID} = req.params
        const user = await User.findOneAndDelete({_id:userID})
        if(!user){
            return res.status(404).json({msg:`No user with id : ${userID}`})
        }
        res.status(200).json({msg:"Successfully Deleted"})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const updateUser = async (req,res)=>{
    try {
        const {id:userID}=req.params
        const {name,username} = req.body
        const user= {name,username}
        updateduser = await User.findOneAndUpdate({_id:userID},user,{
            new:true,
            runValidators:true
        })
        if(!updateduser){
            return res.status(404).json({msg:`No user with id : ${userID}`})
        }
        res.status(200).json({updateduser})
    } catch (error) {
        res.status(500).json({msg:error})        
    }
}
module.exports = 
{ 
    createUser,
    getUser,
    updateUser,
    deleteUser
}