import Todo from "../models/Todo.js"

//@Create a Todo
//@POST
//@path: /api/v1/todo
let createTodo = async (req,res)=>{
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
}

//@Fetch/get all Todos
//@GET
//@path: /api/v1/todo
let getTodos = async (req,res)=>{
    try{
        let todo = await Todo.find()
        res.status(200).json(todo)
    } catch(error){
        res.status(400).json({
            message: error.message,
        })
    }
}


//@Fetch/get a todo
//@GET
//@path: /api/v1/todo/:id
let getTodo = async (req,res)=>{
    let id = req.params.id;
    try{
        let todo = await Todo.findById(id)
        res.status(200).json(todo)
    } catch(error){
        res.status(400).json({
            message: error.message
        })
    }
}


//@Update a Todo
//@PUT
//@path: /api/v1/todo/:id
let updateTodo = async (req,res)=>{
    let id = req.params.id;
    try{
        let todo = await Todo.findByIdAndUpdate(id, req.body, {new:true}) //here {new:true} is used to return the updated todo rather than the old one
        res.status(200).json(todo)
    } catch(error){
        res.status(400).json({
            message: error.message
        })
    }
}

//@Delete a Todo
//@DELETE
//@path: /api/v1/todo/:id
let deleteTodo = async (req,res)=>{
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
}

export {createTodo, getTodos, getTodo, updateTodo, deleteTodo}