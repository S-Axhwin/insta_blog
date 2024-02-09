import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'

const Register = () => {
  const [errorname, setErrorname] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const res = await fetch("https://backendapi-production-4881.up.railway.app/api/auth/register", 
    {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers:{
            'Content-Type': 'application/json'
        }
    });
    const result = await res.json()
    if(result.registered){
        setUsername("")
        setPassword("")
        setErrorname(false)
    }else{
        setErrorname(true)
    }
  }
  return (
    <div style={{display: 'flex', justifyContent: "center", padding: '3rem'}}>

    <form onSubmit={handleSubmit} style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column', gap: '2rem'}}>
        <TextField
         label="username"
         value={username}
         error = {errorname}
         onChange={(e)=>setUsername(e.target.value)}
         />
        <TextField
         value={password}
         label="Password"
         type='password'
         error = {errorname}
         onChange={(e)=>setPassword(e.target.value)}
         />
         <Button type='submit'>Submit</Button>
    </form>
    </div>
    
  )
}

export default Register