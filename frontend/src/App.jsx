import { useState } from 'react'
import './App.css'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  //useEffect hook to properly write the fetch requests
  // fetch("http://localhost:3000/getTodos")
  //     .then(async (res)=>{
  //         const json = await res.json();
  //         setTodos(json.todos);
  //     })
  // const json = await resObj.json();
  // console.log(json.todos);
  // setTodos(json.todos);


  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}> </Todos>
    </div>
  )
}

export default App
