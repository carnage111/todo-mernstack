import express from 'express';
import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from '../controllers/todoController.js';
const router = express.Router();


router.post('/',createTodo) //to create a new todo
router.get('/',getTodos) // to get all todos
router.get('/:id',getTodo) //to get a single todo
router.put('/:id',updateTodo) //to update a todo
router.delete('/:id',deleteTodo) //to delete a todo

export default router; 