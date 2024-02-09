import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import { Snackbar } from '@mui/material'
import './newpost.css'
const NewPost = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [blog, setBlog] = useState("");
    const [error, setError] = useState(false)
    const [result, setResult] = useState("")

    //non
    const [open, setOpen] = useState(false);
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
//non  
  const handleSub = async (e)=>{
    e.preventDefault()
    const post = await fetch("/api/auth/post", 
        {
            method: 'POST',
            body: JSON.stringify({username, password, blog}),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const result = await post.json();
        if(result.mes){
          setUsername("");
          setPassword("");
          setBlog("")
          setError(false);
          setResult("POSTED");
          setOpen(true)
        }else{
            setError(true)
            setResult("USER NAME OR PASSWORD IS WRONG");
            setOpen(true)
        }
        
  }
  return (
    <div>
    <form onSubmit={(e)=>handleSub(e)} style={{display:'flex', flexDirection: 'column', maxWidth: '40%', margin: 'auto', marginTop: '4rem'}}> 
        <TextField
         error={error}
         className='input'
         label="user name"
         variant="standard"
         onChange={(e)=>{setUsername(e.target.value)}}
         value={username}
         />
        <TextField
         error={error}
         className='input'
         label="password"
         variant="standard"
         onChange={(e)=>{setPassword(e.target.value)}}
         value={password}/>
        <TextField
        
        className='input'
         id="standard-basic"
         label="feed"
         variant="standard"
         onChange={(e)=>{setBlog(e.target.value)}}
         value={blog}/>
        <Button sx={{height: "100%", padding:'3rem'}} type='submit'>Submit</Button>
    </form>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={result}
      />
    </div>
  )
}

export default NewPost