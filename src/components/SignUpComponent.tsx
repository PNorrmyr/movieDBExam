import useUserStore from "../stores/user-store"
import userType from '../models/User'
import { useEffect, useState } from "react"
import homeButton from '../assets/film-solid.svg'
import './styles/SignUpComponent.css'
import { Link } from "react-router-dom"

function SignUpComponent() {
  const { addUser, users, error } = useUserStore((state) => ({
    addUser : state.addUser,
    users : state.users,
    error : state.error
  }))
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    if(error){setMessage(`${error}`)}
  }, [error])

  const handleSignUp  = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newUser : userType = {
      username,
      password,
      active : false
    }   

    const success = await addUser(newUser)
    if(success){setMessage('User Created')}
    setUsername('')
    setPassword('')  
  }

  return (
   <section className="sign-up-section">
      <Link to={'/'}>
        <img src={homeButton} alt="Home Button" className="home-btn"/>
      </Link>
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
        </form>
          {
             message && <p className="message">{message}</p>
          }
            
   </section>
  )
}

export default SignUpComponent
