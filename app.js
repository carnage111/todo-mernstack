import express from "express";
import db from './config/db.js'
import todoRoutes from './routes/todoRoutes.js'
import userRoutes from './routes/userRoutes.js'
import methodOverride from 'method-override'
import cookieParser from "cookie-parser";

db(); //to connect to the database
const app = express()



app.use(cookieParser())

//register the template engine
app.set("views","./views")

//to use the method-override
app.use(methodOverride('_method'))

app.use(express.urlencoded({extended:true}))


app.use(express.json())

//to serve/render static files
app.use(express.static('public'))

app.set("view engine", "ejs")


// app.get("/", (req,res)=>{
//     res.render("home")
// })

// /api/v1/todo is the base route
app.use('/api/v1/todo', todoRoutes) //to use the todoRoutes, we are uisng the /api/v1/todo as a prefix to all the routes in todoRoutes
app.use('/api/v1/user', userRoutes) //to use the userRoutes, we are uisng the /api/v1/user as a prefix to all the routes in userRoutes



// //cookies crud

// app.get('/set-cookie',(req,res)=>{
//     res.cookie("secret","123456",{
//         httpOnly:true,
//         maxAge: 24*60*60*100 //ms
//         // secure: true
//     })
//     res.send("cookie is set")
// })


// app.get('/get-cookie',(req,res)=>{
//     res.send(req.cookies.secret)
// })



// app.get("/update-cookie",(req,res)=>{
//     res.cookie("secret","121211",{
//         httpOnly:true,
//         maxAge:24*60*60*1000
//     })
//     res.send("cookie updated")
// })


// app.get("/delete-cookie",(req,res)=>{
//     // res.cookie("secret","",{
//     //     maxAge: 5 //ms
//     // })
//     //above can be done or the clear cookies can also be done to delete cookies
//     res.clearCookie("secret")
//     res.send("cookie deleted")
// })






export default app;