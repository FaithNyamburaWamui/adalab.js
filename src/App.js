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
      <Login/>
      <Users/>
    </div>
  )
}

export default App;
