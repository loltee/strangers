import { useState } from "react"    
import { registeruser } from "../api/requests"

 const Signup =({setToken})=>{
// const Signup =()=>{
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [confirm, setConfirm] = useState("")

const handlesubmit = async (event)=>{
    event.preventDefault() 
    if (password !== confirm){
        console.log("Passwords needs to macth")
        return
    }
    const userobj={username,password}
    const newuser = await registeruser (userobj)
   console.log(newuser.data)
    console.log(newuser.data.token,"User")
    setToken(newuser.data.token)
    setUsername("")
    setPassword("")
    setConfirm("")
}


    return <form onSubmit={handlesubmit}>
        <label htmlFor="">username</label>
        <input type="text" value={username} onChange={(event)=>setUsername(event.target.value)}/>
        <label htmlFor="">password</label>
        <input type="password" value={password}onChange={(event)=>setPassword(event.target.value)}/>
        <label htmlFor="">Confirm Password</label>
        <input type="password"value={confirm}onChange={(event)=>setConfirm(event.target.value)} />
        <button>SignUp</button>
    </form>
}
export default Signup