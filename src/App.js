import {Routes,Route,Link} from "react-router-dom"
import Login from "./Login"
// import { useState } from "react";
import Users from "./Users";

export function Introduction(){
  return(
    <h1>We are Adalab</h1>
  )
}

function App(){
  return(
    <div>
      <nav>
      <Link to="/login"></Link>
      </nav>
     
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
    </div>
  )
}

export default App;
