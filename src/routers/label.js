const express = require("express")
const labelsRoute = express.Router()
const Label = require("../db/models/label")

labelsRoute.get("/labels",async(req,res)=>{

  try
    {  
        const labels =await Label.find({})
        
        if(!labels){
            return res.status(404).send("No labels Found")
        }
        res.send(labels)

    }catch(e){
        res.status(404).send()
    }
})


























labelsRoute.post("/adding/labels",async(req,res)=>{

   try{
    const label = new Label (req.body)
    label.save()
    res.send("Done")

    }catch(e){
        res.status.send({e})
    }
})
module.exports = labelsRoute