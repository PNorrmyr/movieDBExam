import { Link } from "react-router-dom"
import LoginComponents from "../components/LoginComponent"

function LoginPage() {
  return (  
    <section className="login-page-wrapper">
        <LoginComponents />
        <Link to={'/signup'} className="link">
          <button className="sign-up-btn">
            Sign Up
          </button>
        </Link>
    </section>
)}


export default LoginPage
