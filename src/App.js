import React,{useState} from "react";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import "./App.css";



const App = () => {

  const [token,setToken] = useState("")

  return(
    <div>
      <div style={{
        display:"flex",
        justifyContent:"space-around"
      }}>
        <Signup  setToken={setToken}/>
        <Login  setToken={setToken}/>
      </div>
      <Dashboard token={token} setToken={setToken}/>

    </div>
  )
}

export default App;