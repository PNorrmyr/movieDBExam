import { Link } from "react-router-dom"
import useApiStore from "../stores/api-store"
import useFavoritesStore from "../stores/favorites-store"
import useMovieListStore from "../stores/movieList-store"



function MovieDetailsComponent() {
    const { movie } = useMovieListStore((state) => ({
        movie : state.movie
    }))
    const { toggleFavorite } = useFavoritesStore((state) => ({
        toggleFavorite : state.toggleFavorite
    }))
    const { apiKey } = useApiStore.getState()

    if(!movie) {
        return <p>Fetching movie</p>
    }

  return (
   <section className="details-component">
    <Link to={'/home'}>
        <button className="back-btn">Back</button>
    </Link>
    <button className="favorite-btn" onClick={ () => toggleFavorite(movie.imdbid, apiKey)}>Favorite</button>
        <div>
            <h2>{movie.title}</h2>
            <img src={movie.poster} alt={`${movie.title} Thumnail`} />           
            <video src={movie.trailer_link} controls></video>
            
            
        </div>
        
   </section>
  )
}

export default MovieDetailsComponent
