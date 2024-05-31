import jwt from 'jsonwebtoken'
import User from '../models/User.js';


const convertTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    return date.toLocaleString(); // Convert to local date and time string
};

export const auth = async (req,res, next)=>{
    try{
        let token = req.headers?.authorization?.split(" ")[1] //here ? is used to check if the headers or authorization is present or not/ this is called optional chaining, if the headers or authorization is not present then it will not throw an error, rather it will return undefined
        // console.log(req.headers?.authorization?.split(" "));
        // console.log(token);
        if(!token){
            return res.status(401).json({
                message: "You're not logged in!! Please login/Register!"
            })
        }
        let decodedToken = await jwt.verify(token,"SecretKey")
        console.log(decodedToken);


        // Convert timestamps to readable date and time
        const issuedAt = convertTimestamp(decodedToken.iat);
        const expiresAt = convertTimestamp(decodedToken.exp);

        console.log(`Token issued at: ${issuedAt}`);
        console.log(`Token expires at: ${expiresAt}`);


        let userId = decodedToken.id
        let existingUser = User.findById(userId)
        if(!existingUser){
            return res.status(401).json({
                message: "User does not exist with this id!! Please register yourself!"
            })
        }

        req.user = existingUser._id

        next()
    }
    catch(error){
        console.log(error);
    }
}