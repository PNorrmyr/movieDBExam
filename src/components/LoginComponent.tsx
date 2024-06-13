import { useNavigate } from "react-router-dom"
import './styles/LoginComponent.css'
import useUserStore from "../stores/user-store"
import userType from '../models/User'
import { useState } from "react"

function LoginComponents() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const { loginUser } = useUserStore((state) => ({
    loginUser: state.loginUser
  }));

  const navigate = useNavigate();

  const handleLogin = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser : userType = {
      username,
      password
    };

    const success = await loginUser(newUser);
    if(success){
      navigate('/home')
    } else {
      console.log('wrong');
    };
    
    setUsername('');
    setPassword('');
  };


  return (
    <section className="login-section">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
            <input  type="text" 
                    id="username" 
                    className="username" 
                    placeholder="Username" 
                    onChange={(e) => setUsername(e.target.value)}
            />
            <input  type="password" 
                    id="password" 
                    className="password" 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-btn" >Login</button> 
        </form>
    </section>
  )
}

export default LoginComponents
