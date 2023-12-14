import React from 'react'

const Form = ({input,setInput}) => {
  return (
<form class="max-w-md bg-white rounded-md p-6 shadow-md">
<h1 class="text-2xl font-bold mb-4">List of Todos</h1>
<div class=" flex items-center mb-4">
  <label for="Add Task" class="block text-gray-700 text-sm font-bold mb-2"></label>
  <input type="text" role='input' id="task" name="task" placeholder="Enter an item" value={input} onChange={(e)=>setInput(e.target.value)} class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"/>
  <button class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105" type='submit'>
      Add
    </button>
</div>
</form>
  )
}

export default Form
