import express from "express";
import db from './config/db.js'
import Todo from './models/Todo.js'
db();
const app = express()

app.use(express.json())

//@Create a Todo
//@POST
//@path: /api/v1/todo
app.post("/api/v1/todo",async (req,res)=>{
    try{
        let todo = await Todo.create(req.body)

        //or we can do the following to create a new todo and save it
        //let todo = new Todo(req.body)
        //await todo.save()

        res.status(201).json(todo)
        // res.send("done creating a task and added it into the collection")    
    }catch(error){
        res.status(400).json({
            message: error.message,
        })
    }   
})

//@Fetch/get all Todos
//@GET
//@path: /api/v1/todo
app.get("/api/v1/todo", async (req,res)=>{
    try{
        let todo = await Todo.find()
        res.status(200).json(todo)
    } catch(error){
        res.status(400).json({
            message: error.message,
        })
    }
})


//@Fetch/get a todo
//@GET
//@path: /api/v1/todo/:id
app.get("/api/v1/todo/:id",async (req,res)=>{
    let id = req.params.id;
    try{
        let todo = await Todo.findById(id)
        res.status(200).json(todo)
    } catch(error){
        res.status(400).json({
            message: error.message
        })
    }
})


//@Update a Todo
//@PUT
//@path: /api/v1/todo/:id
app.put("/api/v1/todo/:id", async (req,res)=>{
    let id = req.params.id;
    try{
        let todo = await Todo.findByIdAndUpdate(id, req.body, {new:true}) //here {new:true} is used to return the updated todo rather than the old one
        res.status(200).json(todo)
    } catch(error){
        res.status(400).json({
            message: error.message
        })
    }
})

//@Delete a Todo
//@DELETE
//@path: /api/v1/todo/:id
app.delete("/api/v1/todo/:id",async (req,res)=>{
    let id = req.params.id;
    try{
        let todo = await Todo.findByIdAndDelete(id)
        res.status(200).json({
            message:"A todo has been deleted.",
            deletedTodo:todo,
        })
    } catch(error){
        res.status(400).json({
            message: error.message
        })
    }
})

export default app;