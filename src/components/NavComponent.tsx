import { Link, useNavigate } from 'react-router-dom'
import './styles/NavComponent.css'
import logo from '../assets/logo3.png'
import useUserStore from '../stores/user-store'

type Props = {
  tempClass? : string
}

function NavComponent({ tempClass } : Props) {
  const {logoutUser} = useUserStore(state => ({
    logoutUser : state.logoutUser
    
  }))

  const navigate = useNavigate()

  const handleLogout = async () => {
    const success = await logoutUser()
    if(success){
      console.log('Logout successfully');
      navigate('/')
    } else {
      console.log('Logout failed');
      
    }

  } 

  return (
    <header className="heading">
      <img src={logo} alt="website logo" className="logo" />
      { 
           <div className={`top-nav ${tempClass}`}>
              <Link to={'/'}>
                  <button className={`user-btn ${tempClass}`} 
                          onClick={handleLogout}>
                          Logout
                  </button>
              </Link>

              <h1>My Movie Database</h1>

              <Link to={'/favorites'}>
                <button className={`favorites-btn ${tempClass}`}>Favorites</button>
              </Link>
            </div>

      }
    </header>
  )
}

export default NavComponent
