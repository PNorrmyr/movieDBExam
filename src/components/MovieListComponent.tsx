import { Link } from "react-router-dom"
import AddMovieComponent from "./AddMovieComponent"
import MovieCardComponent from "./MovieCardComponent"
import useMovieListStore from "../stores/movieList-store"


function MovieListComponent() {
  const { movieList} = useMovieListStore(state => ({
    movie : state.movie,
    movieList: state.movieList
  }))


  return (
   <section className="movie-list-section">
         {
        <Link to={'/'}>
            
            <button className="user-btn">Logout</button>
        </Link>
      }
    <h2>Movie List</h2>
    <AddMovieComponent />
    
    {movieList.map(movie => (
        <MovieCardComponent key={movie.imdbid} movie = {movie} />
    ))}
   </section>
  )
}

export default MovieListComponent
