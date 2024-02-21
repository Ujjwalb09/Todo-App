import { useState } from 'react'
import axios from 'axios'

export function CreateTodo(){
    //local state variable
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");

    return <div style={{
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
    }}>
        <textarea style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={(e)=>{
            //   const value = e.target.value;
            //   console.log(value);
              setTitle(e.target.value);
        }}/> <br /> 
        <textarea style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={(e)=>{
            // const value = e.target.value;
            // console.log(value);
            setDescription(e.target.value);
      }}/> <br />

        <button style={{
            padding: 10,
            margin: 10
        }} onClick={async ()=>{
            //axios library do this in better way
            await axios.post("http://localhost:3000/todos", 
                JSON.stringify({
                    title:title,
                    description:description
                }),
                {
                headers:{
                    "content-Type": "application/json"
                }
            })
    
        }}>Add a todo</button>
    </div>
}