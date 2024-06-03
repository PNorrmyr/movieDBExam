import { Link } from "react-router-dom"
import LoginComponents from "../components/LoginComponent"
import NavComponent from "../components/NavComponent"
import './styles/LoginPage.css'

function LoginPage() {
  return (  
    <section>
        <NavComponent tempClass="login-page"/>
        <section className="login-page-wrapper">
            <LoginComponents />
            <Link to={'/signup'} className="link">
              <button className="sign-up-btn">
                Sign Up
              </button>
            </Link>
        </section>
    </section>
)}


export default LoginPage
