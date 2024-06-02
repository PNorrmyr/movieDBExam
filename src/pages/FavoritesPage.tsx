import MovieCardComponent from "../components/MovieCardComponent"
import useMovieListStore from "../stores/movieList-store"

function FavoritesPage() {
    const { movieList } = useMovieListStore(state => ({
        movieList : state.movieList
    }))



  return (
    <section className="favorite-page-wrapper">
        <h2>Favorites</h2>
        {
            movieList.filter((movie) => movie.is_favorite)
                .map((movie) => (
                    <MovieCardComponent 
                    key={movie.imdbid}
                    movie = {movie}/>
            )) 
        }
    </section>
  )
}

export default FavoritesPage
