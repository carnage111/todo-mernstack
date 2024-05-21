import express from "express";
import db from './config/db.js'
import todoRoutes from './routes/todoRoutes.js'

db(); //to connect to the database
const app = express()

//register the template engine
// app.set("views","./views")
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set("view engine", "ejs")


// app.get("/", (req,res)=>{
//     res.render("home")
// })

// /api/v1/todo is the base route
app.use('/api/v1/todo', todoRoutes) //to use the todoRoutes, we are uisng the /api/v1/todo as a prefix to all the routes in todoRoutes

export default app;