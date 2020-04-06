const express = require("express")
const taskRoute =  express.Router()
const Task = require("../db/models/task")

taskRoute.post('/api/todo-app/new-todo/:id',async(req,res)=>{
    try{
    const task = new Task({...req.body,owner:req.params.id})
    await task.save()
    res.status(201).send(task) 
    //console.log(new Date(),"inserted..")   
    }catch(err){
        res.status(400).send({err})
    }
})
module.exports = taskRoute