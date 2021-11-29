
const getAllUser = async (req,res) =>{
    res.send("Get All Users");
} 
const getSingleUser = async (req,res) =>{
    res.send("Get single Users");
} 
const showCurrentUser = async (req,res) =>{
    res.send("show current user");
} 
const updateUser = async (req,res) =>{
    res.send("update User");
} 
const updateUserPassword = async (req,res) =>{
    res.send("update user password");
} 

module.exports =
{
    getAllUser,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword
}