import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
const NewPost = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [blog, setBlog] = useState("");
  const handleSub = async (e)=>{
    e.preventDefault()
    const post = await fetch("/api/auth/post", 
        {
            method: 'post',
            body: JSON.stringify({username, password, blog}),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const result = await post.json();
        if(result.mes === "done"){
          setUsername("");
          setPassword("");
          setBlog("")
        }
        
  }
  return (
    <div style={{}}>
    <form onSubmit={(e)=>handleSub(e)} style={{display:'flex', flexDirection: 'column'}}> 
        <TextField
         label="user name"
         variant="standard"
         onChange={(e)=>{setUsername(e.target.value)}}
         value={username}
         />
        <TextField
         label="password"
         variant="standard"
         onChange={(e)=>{setPassword(e.target.value)}}
         value={password}/>
        <TextField
         id="standard-basic"
         label="feed"
         variant="standard"
         onChange={(e)=>{setBlog(e.target.value)}}
         value={blog}/>
        <Button sx={{height: "100%", padding:'3rem'}} type='submit'>Submit</Button>
    </form>
    </div>
  )
}

export default NewPost