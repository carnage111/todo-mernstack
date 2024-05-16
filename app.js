import express from "express";
import db from './config/db.js'
db();
const app = express()


//@Create a Todo
//@POST
//@path: /api/v1/todo
app.post("/api/v1/todo", (req,res)=>{
    res.send("Created a Todo"); 
})

//@Fetch/get all Todos
//@GET
//@path: /api/v1/todo
app.get("/api/v1/todo",(req,res)=>{
    res.send("fetched all todos");
})


//@Fetch/get a todo
//@GET
//@path: /api/v1/todo/:id
app.get("/api/v1/todo/:id",(req,res)=>{
    res.send("fetched a todo");
})


//@Update a Todo
//@PUT
//@path: /api/v1/todo/:id
app.put("/api/v1/todo/:id",(req,res)=>{
    res.send("Updated a Todo");
})

//@Delete a Todo
//@DELETE
//@path: /api/v1/todo/:id
app.delete("/api/v1/todo/:id",(req,res)=>{
    res.send("deleted a todo");
})

export default app;