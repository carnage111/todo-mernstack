import User from "../models/User.js"
import { genToken } from "../utils/genToken.js";

export const register=async (req,res)=>{
    try {
        //we are getting the name,email,password and confirmPassword from the request body ie from the form that the user will fill in the frontend(register.ejs), we are then destructuring the values from the request body
        const {name,email,password,confirmPassword}=req.body;
        

        //here wer are finding the user by the email, email is unique so we can use it to find the user
        let existingUser=await User.findOne({email})

        //here we are checking if the user already exists or not, if it exists we will return a message that the user already exists and ask the user to login
        if(existingUser){
            return res.status(400).json({
                message:"Email exists already,Try to Login!"
            })
        }

        //if the user does not exist, we will create a new user
        let newUser=await User.create({
            name,
            email,
            password,
            confirmPassword
        })

        //if the user is created successfully, we will generate a token for the user and send the user and the token as a response to the user
        let token=await genToken(newUser._id)
        res.cookie("jwt",token,{
            httpOnly: true,
            maxAge: 24*60*60*1000
        })

        res.redirect('/api/v1/todo')

        // res.status(201).json({
        //     newUser,
        //     token
        // })
        
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}

export const login=async (req,res)=>{
    try {
      const {email,password}=req.body;

      //here we are finding the user by the email
      let existingUser=await User.findOne({email})


      //if the user does not exist or the password does not match, we will return a message that the username and password do not match
      //verifyPassword is a method that we created in the User model to verify the password 
      if(!existingUser || !(await existingUser.verifyPassword(password,existingUser.password))){
        return res.status(400).json({
            message:"Username and password do not match OR User does not exist!"
        })
      }

        //if the user exists and the password matches, we will generate a token for the user and send the user and the token as a response to the user, so that the user can use the token to access the protected routes.
        //also the generated token wont be same as the token that was generated when the user registered because the token is generated with different iat and exp values, which causes the token to be different, even if the user and payload is same
        //the token being different doesnt really matter, because the token is generated with the same secret key and payload, so the token will be valid and the user can access the protected routes
      let token=await genToken(existingUser._id)

      res.cookie("jwt",token,{
        httpOnly: true,
        maxAge: 24*60*60*1000
      })

       res.redirect('/api/v1/todo')

    //   res.status(200).json({
    //     existingUser,
    //     token
    //   }) 
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}


export const logout = (req,res)=>{
    res.clearCookie("jwt")
    res.redirect('/api/v1/user/login')
}



export const getRegisterForm=(req,res)=>{
    res.render("register.ejs") //or only regsiter
}

export const getLoginForm=(req,res)=>{
    res.render("login.ejs")
}