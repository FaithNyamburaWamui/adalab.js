import './index.css'
import { useState } from "react";
import {login}  from "./utils"
import { Link,useNavigate } from 'react-router-dom';

const Login=()=>{

    const link=useNavigate();
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("")
    console.log({username})

    const handleLogin=async(event)=>{
        event.preventDefault();
        const results = await login({username,password});
        link('./users')
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
                <Link to="/users"><button type="submit">Login</button></Link>
               
            </form>
        </div>
    )
}

export default Login;