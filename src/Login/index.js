import './index.css'
import { useState } from "react";
import {login}  from "./utils"

const Login=()=>{
    
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("")
    console.log({username})

    const handleLogin=async(event)=>{
        event.preventDefault();
        const results = await login({username,password});
        console.log({results});
    }

    return(
        <div>
            <form onSubmit={handleLogin}>
              <h1>Log In</h1>
                <input placeholder="Enter username" type="text" onChange={(event)=>setUserName(event.target.value)}/>
                {/* <br> */}
                <input placeholder="Enter Password" type="password" onChange={(event)=>setPassword(event.target.value)}/>
                {/* </br> */}
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;