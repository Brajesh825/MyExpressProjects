const Review = require('../models/Review')
const Product = require('../models/Product')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

const {checkPermissions} = require('../utils')

const createReview = async (req,res) =>{
    const { product : productId} = req.body;

    console.log(productId);

    const isValidProduct = await Product.findOne({_id:productId})
    if(!isValidProduct){
        throw new CustomError.NotFoundError(`No product with id : ${productId}`)
    }

    const alreadySubmitted = await Review.findOne({
        Product: productId,
        user: req.user.userId
    })

    if(alreadySubmitted){
        throw new CustomError.BadRequestError('Already submitted review for this product')
    }

    req.body.user = req.user.userId
    const review = await Review.create(req.body)
    res.status(StatusCodes.CREATED).json({review})
}

const getAllReviews = (req,res) =>{
    res.send('Get all reviews')
}

const getSingleReview = (req,res) =>{
    res.send('Get Single review')
}

const updateReview = (req,res) =>{
    res.send('Update review')
}

const deleteReview = (req,res) =>{
    res.send('Delete review')
}

module.exports = {
    createReview,
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview
}