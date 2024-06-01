
function LoginComponents() {
  const handleLogin = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  

  return (
    <section>
        <form className="login-form" onSubmit={handleLogin}>
            <input type="text" id="username" className="username" placeholder="Username"/>
            <input type="password" id="password" className="password" placeholder="Password"/>
            <button className="login-btn" >Login</button> 
        </form>
        <button className="signup-btn">Sign Up</button>
    </section>
  )
}

export default LoginComponents
