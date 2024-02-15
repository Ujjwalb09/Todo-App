import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
     fetch("http://localhost:3000/getTodos")
        .then(async (res)=>{
          const obj = await res.json();
          setTodos(obj.todos);
        })
  }, [todos])


  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos key={todos.id} todos={todos}> </Todos>
    </div>
  )
}

export default App
