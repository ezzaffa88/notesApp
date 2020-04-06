const express = require("express")
const taskRoute =  express.Router()
const Task = require("../db/models/task")

taskRoute.post('/new-todo/:id',async(req,res)=>{
    try{
    const task = new Task({...req.body,owner:req.params.id})
    await task.save()
    res.status(201).send(task) 
    //console.log(new Date(),"inserted..")   
    }catch(err){
        res.status(400).send({err})
    }
})
taskRoute.get("/my-todos/:id",async(req,res)=>{
    try{
    const myTodos = await Task.find({owner:req.params.id})
    
    if(!myTodos){
        return res.status(404).send({error:"no Tasks Yet"})
    }
    res.send(myTodos)

    }catch(e){
        res.status(400).send
    }
})
taskRoute.delete("/my-todo/delete/:id",async(req,res)=>{
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
taskRoute.patch("/my-todo/update/:id",async(req,res)=>{

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