import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/Todos'
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    setTimeout(()=>{
      axios.get("http://localhost:3000/todos")
         .then(async (res)=>{
           setTodos(res.data.todos);
         })
    }, 100)
  }, [todos])


  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos key={todos.id} todos={todos}> </Todos>
    </div>
  )
}

export default App
