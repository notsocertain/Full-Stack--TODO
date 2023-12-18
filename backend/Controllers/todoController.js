const mongoose= require('mongoose')
const todoModel= require('../models/todo')

const getTodos = async(req,res)=>{
    try{
        const allTodos = await todoModel.find({}).sort({completed:1})
        res.status(200).send(allTodos)
    }catch(e){
        res.status(500).send(e.message)
        console.error(e);
    }
}

const createTodo = async(req,res)=>{
    const todo = req.body;
    try{
        const existingTodo = await todoModel.findOne({ text: todo.text });
        if (existingTodo) {
            // If a todo with the same title exists, return an error
            return res.status(400).send("Todo with the same title already exists");
        }
        const newTodo = await todoModel.create(todo);
        res.status(201).send(newTodo);
    }catch(e){
        res.status(500).send(e.message)
        console.error(e)
    }
}

const updateTodo = async(req,res)=>{
    const id = req.params.id;
    try{
        //check if id is valid
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).send(`There is no Todo of that ${id}`)
        }
        const todoId = {_id:id}
        const update = {completed: true};
        const updatedTodo = await todoModel.findOneAndUpdate(todoId,update)
        const afterTodo = await todoModel.findOne({_id:id})
        if(!updatedTodo){
            return res.status(404).send(`there is no todo task to update with id ${id}`)
        }
        res.status(201).send(afterTodo);

    }catch(e){
        res.status(500).send(e.message)
        console.error(e)
    }
}
const deleteTodo = async(req,res)=>{
    const id = req.params.id;
    try{
        //check if id is valid
        if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`There is no Todo of that ${id}`)
    }
         const todoId = {_id:id}
         const deleteTodo = await todoModel.findOneAndDelete(todoId)
         if(!deleteTodo){
            return res.status(404).send(`there is no todo task to delete with id ${id}`)
        }
        res.status(201).send('the task has been deleted')
    }catch(e){
        res.status(500).send(e.message)
        console.error(e)

    }
}

module.exports ={getTodos,createTodo,updateTodo, deleteTodo

}