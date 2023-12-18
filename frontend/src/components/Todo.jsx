import { useState, useEffect } from 'react';
import React from 'react';
import Form from './Form';
import axios from '../axios';

const Todo = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('/todos');
            setTodos(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    const addData = async (e) => {
        try {
        e.preventDefault();
        if(input.length==0){
            console.log('enter something')
                return null;
        }
       await axios.post('/todo',[{
        ...todos,
        text:input
       }]);
            console.log('addedData')
            fetchData();
            setInput=''
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const updateTodo = async(id)=>{
        try{
            const response = await axios.put(`/todo/${id}`,id)
            fetchData();
            return response.json.data;

        }catch(e){
            console.error(e);   
        }

    }

    const deleteTodo = async(id)=>{
        try{
            const response = await axios.delete(`/todo/${id}`,id)
            fetchData();
            return response.json.data;

        }catch(e){
            console.error(e);   
        }

    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="max-w-md mx-auto bg-white rounded-md p-6 shadow-md">
                <h1 className="text-2xl font-bold mb-4">Welcome to My Todo App</h1>
                <Form input={input} setInput={setInput} addData={addData} />

                <div className="mt-4">
                    {todos.map((todo) => (
                        <div key={todo.id} className="flex items-center justify-between bg-blue-50 p-2 mb-2 rounded-md">
                            <div>{todo.text}</div>
                            <div className="flex">
                            <button
                            className={`ml-2 ${todo.completed ? 'bg-green-500' : 'bg-orange-500'} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105`}
                            onClick={() => updateTodo(todo._id)}
                            type="button"
                            >
                            {todo.completed ? 'Completed' : 'Pending'}
                            </button>
                                <button className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                                onClick={() => deleteTodo(todo._id)}
                                type="button">
                                    X
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Todo;
