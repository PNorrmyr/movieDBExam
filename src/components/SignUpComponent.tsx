import useUserStore from "../stores/user-store"
import userType from '../models/User'
import { useEffect, useState } from "react"
import './styles/SignUpComponent.css'
import { Link } from "react-router-dom"

function SignUpComponent() {
  const { addUser, error, resetError } = useUserStore((state) => ({
    addUser : state.addUser,
    error : state.error,
    resetError : state.resetError
  }));
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  
  const resetMessage = () => {
    resetError();
  };

  useEffect(() => {
    if (error) {
      const cleanedError = error.replace(/"/g, '');
      setMessage(`${cleanedError}`);
    }
  }, [error]);

  const handleSignUp  = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser : userType = {
      username,
      password,
      active : false
    };

    const success = await addUser(newUser);
    if(success){
      setMessage('User Created')
    };
    setUsername('');
    setPassword('');
  };


  return (
   <section className="sign-up-section">
      <h2>Register</h2>

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

        <button className="signup-btn" >Register</button> 
      </form>
      
        {
          message && <p className="message">{message}</p>
        }

      <Link to={'/'}>
        <button onClick={resetMessage} className="back-btn">Back</button>
      </Link>
   </section>
  )
}

export default SignUpComponent
