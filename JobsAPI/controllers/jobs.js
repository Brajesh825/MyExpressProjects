const Job = require('../models/Job')
const {statusCodes, StatusCodes} = require('http-status-codes')
const {BadRequestError,NotFoundError} = require('../errors')

const getAllJobs =async (req,res) =>{
    res.send('get all jobs')
}

const createJob =async (req,res) =>{
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({job})
}

const getJob =async (req,res) =>{
    res.send('get single job')
}

const updateJob =async (req,res) =>{
    res.send('update job')
}

const deleteJob =async (req,res) =>{
    res.send('Delete job')
}

module.exports ={
    getAllJobs,
    createJob,
    getJob,
    updateJob,
    deleteJob
}