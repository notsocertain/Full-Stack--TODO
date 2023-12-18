const express = require('express');
const router = express.Router();
const { getTodos,
        createTodo,
        updateTodo,
        deleteTodo} = require('../Controllers/todoController');

// API ENDPOINTS

// get todo list
router.get('/todos', getTodos);

// // create a todo
router.post('/todo', createTodo);

// // update a todo
router.put('/todo/:id', updateTodo);

// // delete a todo
router.delete('/todo/:id', deleteTodo);

module.exports = router;
