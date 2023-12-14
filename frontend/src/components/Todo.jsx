
import { useState } from 'react'
import React from 'react'
import Form from './Form'

const Todo = () => {
    const [input,setInput]= useState('');
    console.log(`input is ${input}`)
  return (
<div class=" flex items-center justify-center h-screen bg-gray-200">
<div class="max-w-md mx-auto bg-white rounded-md p-6 shadow-md">
  <h1 class="text-2xl font-bold mb-4">Welcome to My Todo App</h1> 
<Form input ={input} setInput={setInput}/>
</div>
</div>
 
  )
}

export default Todo
