/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import {useState} from 'react'

export function Todos({ todos }) {
  const [render, setRender] = useState("");

  return <div>
      {todos.map((todo) => {
        return <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={async ()=>{
              if(todo.completed == false){
                await fetch("http://localhost:3000/markAsDone", {
                  method: "PUT",
                  body: JSON.stringify({
                    id: todo._id
                  }),
                  headers:{
                    "content-Type": "application/json"
                  }
                })
                setRender("");
              }
            }}>
              {todo.completed == true ? "Completed" : "Mark as Complete"}
            </button>
          </div>
      })}
    </div>

}
