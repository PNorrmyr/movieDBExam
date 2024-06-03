import { Link } from 'react-router-dom'
import './styles/NavComponent.css'

type Props = {
  tempClass? : string
}

function NavComponent({ tempClass } : Props) {
  return (
    <header className={`heading ${tempClass}`}>
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
