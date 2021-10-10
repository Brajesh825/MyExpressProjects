const Task = require('../models/task')

const getAllTasks =(req,res)=>{
    res.json("Get all Tasks")
}

const createTask = async (req,res)=>{
    const task = await Task.create(req.body)
    res.status(201).json(task)
}

const getTask = (req,res)=>{
    res.json("Get one Task")
}

const updateTask = (req,res)=>{
    res.json("Update Task")
}

const deleteTask = (req,res)=>{
    res.json("Delete Task")
}

module.exports = 
{   getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}