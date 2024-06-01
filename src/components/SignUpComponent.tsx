import { Link } from "react-router-dom"

function SignUpComponent() {
  return (
   <section className="sign-up-section">
    <h2>Signup</h2>
    <form className="signup-form" >
            <input type="text" id="username" className="username" placeholder="Username"/>
            <input type="password" id="password" className="password" placeholder="Password"/>
            <Link to = {'/'} className = "link">
                <button className="signup-btn" >Sign Up</button> 
            </Link>
        </form>
   </section>
  )
}

export default SignUpComponent
