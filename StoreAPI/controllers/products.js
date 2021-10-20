const Product = require('../models/product')

const getAllProductsStatic = async (req,res)=>{
    const products = await Product.find({})
    res.status(200).json({products,nbHits: products.length})
}

const getAllProducts = async (req,res)=>{

    const {name,company,featured,sort,fields,numericFilters} =req.query
    const queryObject={}
    // Filter
    if(name)
    {
        queryObject.name = { $regex :name ,$options: 'i'}
    }
    if(company)
    {
        queryObject.company = company
    }
    if(featured)
    {
        queryObject.featured = featured === 'true' ?true:false
    }
    //Numeric Filters
    if(numericFilters){
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '<': '$lt',
            '<=': '$lte',
            '=': '$eq',
        }
        const regEx = /\b(<|>|<=|>=|=)\b/g
        let filters = numericFilters.replace(
            regEx,
            (match)=>`-${operatorMap[match]}-`
        )
        const options = ['price','rating']
        filters=filters.split(',').forEach((item)=> {
            const [field,operator,value]=item.split('-')
            if(options.includes(field)){
                queryObject[field]={[operator]:Number(value)}
            }
        })
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
    // Page
    const page = Number(req.query.page) || 1
    // limit
    const limit = Number(req.query.limit) || 10
    // Skip
    const skip = (page-1)*limit
    result=result.skip(skip).limit(limit)

    //End products
    products =  await result
    res.status(200).json({products,nbHits: products.length})
}

module.exports = {getAllProducts,getAllProductsStatic}