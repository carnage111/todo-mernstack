import { Schema, model } from "mongoose";
//as mongodb is schemaless we have to a schema(recommended)

let todoSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    isCompleted:{
        type: Boolean,
        default: false
    }
})
//model the Todo collection using todoSchema using model function
let Todo = model("Todo", todoSchema)

export default Todo;