import useUserStore from "../stores/user-store"
import userType from '../models/User'
import { useState } from "react"

function SignUpComponent() {
  const { addUser, users, error } = useUserStore((state) => ({
    addUser : state.addUser,
    users : state.users,
    error : state.error
  }))
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSignUp = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newUser : userType = {
      username,
      password,
      active : false
    }   
    addUser(newUser)

    setUsername('')
    setPassword('')  

  }



  return (
   <section className="sign-up-section">
    <h2>Signup</h2>
    <form className="signup-form" onSubmit={handleSignUp} >
            <input 
              type="text" 
              id="username" 
              className="username" 
              placeholder="Username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
            />
            <input 
              type="password" 
              id="password" 
              className="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="signup-btn" >Sign Up</button> 
            {
              error ? <p className="message">{error}</p> : <p className="message">User Created</p>
            }
        </form>
   </section>
  )
}

export default SignUpComponent
