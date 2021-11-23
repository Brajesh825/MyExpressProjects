

const getAllJobs =async (req,res) =>{
    res.send('get all jobs')
}

const createJob =async (req,res) =>{
    res.send('Create Job')
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