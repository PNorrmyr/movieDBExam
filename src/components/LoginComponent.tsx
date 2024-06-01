
function LoginComponents() {
  

  return (
    <section>
        <form className="login-form">
            <input type="text" id="username" className="username" placeholder="Username"/>
            <input type="password" id="password" className="password" placeholder="Password"/>
            <button className="login-btn" >Login</button> 
            <button className="signup-btn">Sign Up</button>
        </form>
    </section>
  )
}

export default LoginComponents
