import { Link } from "react-router-dom"
import './styles/LoginComponent.css'

function LoginComponents() {
  const handleLogin = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  

  return (
    <section className="login-section">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
            <input type="text" id="username" className="username" placeholder="Username"/>
            <input type="password" id="password" className="password" placeholder="Password"/>
            <Link to={'/home'} className="link">
              <button className="login-btn" >Login</button> 
            </Link>
        </form>
    </section>
  )
}

export default LoginComponents
