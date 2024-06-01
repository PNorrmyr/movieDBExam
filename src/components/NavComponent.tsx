import { Link } from "react-router-dom"

function NavComponent() {
  return (
    <header className="heading">
      <img src='src\assets\logo.png' alt="website logo" className="logo" />
      {
        <Link to={'/'}>
            <button className="user-btn">Logout</button>
        </Link>
      }
    </header>
  )
}

export default NavComponent
