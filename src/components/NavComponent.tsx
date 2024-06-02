import { Link } from 'react-router-dom'
import './styles/NavComponent.css'

function NavComponent() {
  return (
    <header className="heading">
      <img src='src\assets\logo.png' alt="website logo" className="logo" />
      {
        <div className="btns">
          <Link to={'/'}>
              
              <button className="user-btn">Logout</button>
          </Link>

          <Link to={'/favorites'}>
            <button className="favorites btn">View Favorites</button>
          </Link>
        </div>
      }
    </header>
  )
}

export default NavComponent
