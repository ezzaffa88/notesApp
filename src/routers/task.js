const express = require("express")
const taskRoute =  express.Router()
const Task = require("../db/models/task")
const User = require('../db/models/user')
const auth =  require('../middlewares/auth')

taskRoute.post('/new-todo',auth,async(req,res)=>{
    try{
    const task = new Task({...req.body,owner:req.user.id})
    await task.save()
    res.status(201).send(task) 
    //console.log(new Date(),"inserted..")   
    }catch(err){
        res.status(400).send(err)
    }
})
taskRoute.get("/my-todos",auth,async(req,res)=>{
    const filters = ['important','starred','completed']
    const match = {}
    filters.forEach((elem)=>{
        if(req.query[elem]){
            match[elem] = req.query[elem]
        }
    })
    console.log(match)
    const userId = req.user.id
    try{
     await User.findById(userId)
    .populate({
        path:'todos',
        match
    }).exec((err,result)=>{
        if (err){
            throw new error("no Tasks Yet")
        }
        return res.send(result.todos)
    })    
    }catch(e){
        res.status(400).send
    }
})
taskRoute.delete("/my-todo/delete/:id",auth,async(req,res)=>{
    try{
        const todoToDelete =await Task.findByIdAndDelete(req.params.id)
        if(!todoToDelete){
            return res.status(404).send("To Do Not found")
        }
        res.send(todoToDelete)

    }catch(e){
        res.status(400).send
    }
})
taskRoute.patch("/my-todo/update/:id",auth,async(req,res)=>{

  try {
    const updates = Object.keys(req.body)
    const todoToUpdate = await Task.findById(req.params.id)
        if(!todoToUpdate){
            return res.status(404).send("To DO Not Found")
        }
    updates.forEach((key)=>{
        todoToUpdate[key] = req.body[key]
    })
    await todoToUpdate.save()
    res.send(todoToUpdate)
    }catch(e){
        res.status(400).send()
    }
})

module.exports = taskRoute