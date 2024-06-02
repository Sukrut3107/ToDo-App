import { useState } from "react"

export function TodoCreate(){
    //react query 
    const [title,seTitle] = useState("");
    const[description,setDescription] = useState("");

    return <div>
        
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="Title" onChange={function(e){
                const value = e.target.value;
                // console.log(value);
                seTitle(e.target.value);
        }} /><br /> 
        <input  style={{
            padding: 10,
            margin: 10
        }}   type="text" placeholder="Description" onChange={function(e){
            const value = e.target.value;
            console.log(value);
            setDescription(e.target.value);
        }} /><br /> 

        <button input style={{
            padding: 10,
            margin: 10
        }}
            onClick={()=>{
                fetch("http://localhost:3000/todo",{
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description:description
                    }),
                    headers:{
                      "Content-type":"application/json"  
                    }
                })
                .then(async function(res){
                    const json = await res.json();
                    alert("Todo Added");
                })
            }}        
        >Add To Do</button>
    </div>
}