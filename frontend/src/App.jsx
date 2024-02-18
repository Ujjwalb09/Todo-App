import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    setTimeout(()=>{
      fetch("http://localhost:3000/todos")
         .then(async (res)=>{
           const obj = await res.json();
           setTodos(obj.todos);
         })
    }, 1000)
  }, [todos])


  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos key={todos.id} todos={todos}> </Todos>
    </div>
  )
}

export default App
