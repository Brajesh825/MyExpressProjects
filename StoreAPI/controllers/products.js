const Product = require('../models/product')

const getAllProductsStatic = async (req,res)=>{
    const products = await Product.find({})
    res.status(200).json({products,nbHits: products.length})
}

const getAllProducts = async (req,res)=>{

    const {name,company,featured,sort,fields} =req.query
    queryObject={}
    // Filter
    if(name)
    {
        queryObject.name = { $regex :name ,$option: 'i'}
    }
    if(company)
    {
        queryObject.company = company
    }
    if(featured)
    {
        queryObject.featured = featured === 'true' ?true:false
    }
    // Result
    let result = Product.find(queryObject)
    // Sort
    if(sort){
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    }else{
        result = result.sort('featured')
    }
    //Fields
    if(fields){
        const fieldList = fields.split(',').join(' ')
        result = result.select(fieldList)
    }
    products =  await result
    res.status(200).json({products,nbHits: products.length})
}

module.exports = {getAllProducts,getAllProductsStatic}