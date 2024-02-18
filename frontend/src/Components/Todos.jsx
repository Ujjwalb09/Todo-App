/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import {useState} from 'react'

export function Todos({ todos }) {
  const [render, setRender] = useState("");

  return <div style={{
    display: "flex",
    flexDirection: 'row',
    flexWrap: "wrap"
  }}>
      {todos.map((todo) => {
        return <div  style={styles.todo}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button style={styles.button1} onClick={async ()=>{
              if(todo.completed == false){
                await fetch("http://localhost:3000/todos", {
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
              {todo.completed == true ? "Completed" : "Mark as Done"}
            </button>

            <button style={styles.button2} onClick={async ()=>{
              await fetch(`http://localhost:3000/todos?id=${todo._id}`, {
                method: "DELETE",
                headers: {
                  "content-type": "applicaation/json"
                }
              })
            }}>Delete</button>
          </div>
      })}
    </div>

}


const styles = {
  todo: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    margin: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f8f9fa',
    padding: '20px',
    width: '220px',
    textAlign: "center"
  },

  button1: {
    textDecoration: 'none',
      color: '#070F2B', // Text color
      padding: '5px 5px', // Padding for the button
      borderRadius: '5px', // Border radius for rounded corners
      backgroundColor: '#BFEA7C', // Background color for the button
      display: 'inline-block', // Display as inline-block to be side by side
      margin: '10px', // Margin between buttons
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
      
  },
  button2: {
    textDecoration: 'none',
      color: '#070F2B', // Text color
      padding: '5px 5px', // Padding for the button
      borderRadius: '5px', // Border radius for rounded corners
      backgroundColor: '#D04848', // Background color for the button
      display: 'inline-block', // Display as inline-block to be side by side
      margin: '10px', // Margin between buttons
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
      
  }
}