import AddMovieComponent from "./AddMovieComponent"
import MovieCardComponent from "./MovieCardComponent"
import useMovieListStore from "../stores/movieList-store"


function MovieListComponent() {
  const { movieList} = useMovieListStore(state => ({
    movieList: state.movieList
  }))

  return (
   <section className="movie-list-section">
    <h2>Movie List</h2>
    <AddMovieComponent />
    
    {movieList.map(movie => (
        <MovieCardComponent key={movie.imdbid} movie = {movie} />
    ))}
   </section>
  )
}

export default MovieListComponent
