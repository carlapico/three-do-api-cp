import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { getTasks, createTask, updateTask, deleteTask } from "./src/tasks.js"

const app= express(app)
app.use(cors())
app.use(express.json())

app.get('/tasks', getTasks) // get all tasks from db
app.post('/tasks', createTask) // from frontend to db
app.patch('/tasks/:taskId', updateTask) // update 1 task
app.delete('/tasks/:taskId', deleteTask) // delete 1 task 


export const api = functions.https.onRequest(app)