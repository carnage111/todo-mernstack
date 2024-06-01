import Todo from "../models/Todo.js"
import User from "../models/User.js"

//@Create a Todo
//@POST
//@path: /api/v1/todo
let createTodo = async (req,res)=>{
    try{
        let todo = await Todo.create(req.body)
        //or we can do the following to create a new todo and save it
        //let todo = new Todo(req.body)
        //await todo.save()
        
        res.redirect("/api/v1/todo")
        
        // res.status(201).json(todo)
        // res.send("done creating a task and added it into the collection")    
        
        
    }catch(error){
        res.status(400).json({
            message: error.message,
        })
    }   
}

//fetch or get all todos
//get method
//path /api/v1/todo
// In your controller where you render the home view
let getTodos = async (req, res) => {
    try {
        let todos = await Todo.find();
        // Pass the todos array to the home view
        const {name} = await User.findById(req.user) //here we are getting the req.user from auth, which will give the id, we use this id to find the users name and pass it while rendering home.ejs
        res.render('home', {todos,name}); // Or simply res.render('home', { todos });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}


//fetch or get a single todo
//get method
//path: /api/v1/todo/:id
let getTodo = async (req,res)=>{
    let todoID = await req.params.id;
    try{
        let todo = await Todo.findById(todoID)
        // res.status(200).json(todo)
        const {name} = await User.findById(req.user)
        res.render('update', {todo,name})
    }
    catch(error){
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
        // let todo = await Todo.findByIdAndUpdate(id, req.body, {new:true}) //here {new:true} is used to return the updated todo rather than the old one
        await Todo.findByIdAndUpdate(id, req.body) //here {new:true} is used to return the updated todo rather than the old one
        res.redirect('/api/v1/todo')
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
        // res.status(200).json({
        //     message:"A todo has been deleted.",
        //     deletedTodo:todo,
        // })
        res.redirect('/api/v1/todo')
    } catch(error){
        res.status(400).json({
            message: error.message
        })
    }
}

export {createTodo, getTodos, getTodo, updateTodo, deleteTodo}