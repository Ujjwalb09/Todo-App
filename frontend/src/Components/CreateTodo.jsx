import { useState } from 'react'

export function CreateTodo(){
    //local state variable
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");

    return <div>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={(e)=>{
            //   const value = e.target.value;
            //   console.log(value);
              setTitle(e.target.value);
        }}/> <br /> 
        <input style={{
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
            await fetch("http://localhost:3000/createTodo", {
                method: "POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "content-Type": "application/json"
                }
            })
                
            alert("Todo added");
    
        }}>Add a todo</button>
    </div>
}