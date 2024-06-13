import { Link } from "react-router-dom"
import LoginComponents from "../components/LoginComponent"
import NavComponent from "../components/NavComponent"
import './styles/LoginPage.css'
import useUserStore from "../stores/user-store"

function LoginPage() {
  const { resetError } = useUserStore(state => ({
    resetError : state.resetError
  }));

  return (  
    <section>
        <NavComponent tempClass="hide-page"/>

        <section className="login-page-wrapper">
            <LoginComponents />

            <Link to={'/signup'} className="link">            
              <button className="sign-up-btn" onClick={resetError}>Register</button>
            </Link>
        </section>
    </section>
)}


export default LoginPage
