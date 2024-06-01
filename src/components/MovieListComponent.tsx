import { Link } from "react-router-dom"
import AddMovieComponent from "./AddMovieComponent"
import MovieCardComponent from "./MovieCardComponent"

function MovieListComponent() {
  return (
   <section className="movie-list-section">
         {
        <Link to={'/'}>
            
            <button className="user-btn">Logout</button>
        </Link>
      }
    <h2>Movie List</h2>
    <AddMovieComponent />
    <MovieCardComponent />
   </section>
  )
}

export default MovieListComponent
