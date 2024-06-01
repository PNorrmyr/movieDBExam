import AddMovieComponent from "./AddMovieComponent"
import MovieCardComponent from "./MovieCardComponent"

function MovieListComponent() {
  return (
   <section className="movie-list-section">
    <h2>Movie List</h2>
    <AddMovieComponent />
    <MovieCardComponent />
   </section>
  )
}

export default MovieListComponent
