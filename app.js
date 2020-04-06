const express = require("express")
const app = express ()
const port = process.env.PORT || 4000
require('./src/db/connector')
const taskRoute = require("./src/routers/task")
const labelsRoute = require("./src/routers/label")
app.use(express.json())
app.use(taskRoute)
app.use(labelsRoute)


app.listen(port,()=>console.log("server is up on port ",port))