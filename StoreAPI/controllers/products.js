
const getAllProducts = async (req,res)=>{
    res.status(200).send({msg:"Product Route"})
}
const getAllProductsStatic = async (req,res)=>{
    res.status(200).send({msg:"Product Testing Route"})
}

module.exports = {getAllProducts,getAllProductsStatic}