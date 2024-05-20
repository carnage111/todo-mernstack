import express from "express";
import db from './config/db.js'
import todoRoutes from './routes/todoRoutes.js'

db(); //to connect to the database

const app = express()

app.use(express.json())


// /api/v1/todo is the base route
app.use('/api/v1/todo', todoRoutes) //to use the todoRoutes, we are uisng the /api/v1/todo as a prefix to all the routes in todoRoutes

export default app;