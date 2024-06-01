import NavComponent from "../components/NavComponent"
import MovieListComponent from "../components/MovieListComponent"

function HomePage() {
  return (
   <section className="home-page-wrapper">
        <NavComponent />
        <MovieListComponent />
   </section>
  )
}


export default HomePage
