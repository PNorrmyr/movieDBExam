import AddMovieComponent from "./AddMovieComponent"
import MovieCardComponent from "./MovieCardComponent"
import useMovieListStore from "../stores/movieList-store"
import useApiStore from "../stores/api-store"
import './styles/MovieListComponent.css'


function MovieListComponent() {
  const { movieList, deleteMovie } = useMovieListStore(state => ({
    movieList: state.movieList,
    deleteMovie : state.deleteMovie,
  }));
  
  const { apiKey } = useApiStore.getState();

  return (
   <section className="movie-list-section">
    <AddMovieComponent />
    
    <h2>Movies</h2>
    {movieList.map(movie => (
        <MovieCardComponent 
          key={movie.imdbid} 
          movie = {movie} 
          handleDelete={ () => deleteMovie(movie.imdbid, apiKey) } />
    ))}
   </section>
  )
}

export default MovieListComponent
