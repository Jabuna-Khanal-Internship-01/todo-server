import express from 'express';
import { createToDo, deleteToDo, getToDos } from '../controllers/todo.js';
import toDos from '../models/todo.js';

const router = express.Router();

router.get('/', getToDos);
router.post('/', createToDo);
router.delete('/:todo_id', deleteToDo);

 
export default router;