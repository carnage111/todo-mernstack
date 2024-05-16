import mongoose from "mongoose";

export default async function connectDB() {
    try {
        // let database = await mongoose.connect("mongodb://localhost:27017/todo") //defining the port is optional
        let database = await mongoose.connect("mongodb://127.0.0.1/todo")
        console.log(`Connected to MongoDB: ${database.connection.host}`);
    } catch (error) {
        console.log(`Error connecting to MongoDB, ${error.message}`);
    }
}