const Product = require('../models/product')

const getAllProductsStatic = async (req,res)=>{
    const products = await Product.find({
        featured:true
    })
    res.status(200).json({products,nbHits: products.length})
}

const getAllProducts = async (req,res)=>{

    const {name,company,featured,sort} =req.query
    queryObject={}
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

    let result = Product.find(queryObject)
    if(sort){
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    }else{
        result = result.sort('featured')
    }
    products =  await result
    res.status(200).json({products,nbHits: products.length})
}

module.exports = {getAllProducts,getAllProductsStatic}