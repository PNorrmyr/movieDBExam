import NavComponent from "../components/NavComponent"
import MovieListComponent from "../components/MovieListComponent"
import './styles/HomePage.css'

function HomePage() {
  return (
   <section>
        <NavComponent />
        <div className="home-page-wrapper">
          <MovieListComponent />
        </div>
   </section>
  )
}


export default HomePage
