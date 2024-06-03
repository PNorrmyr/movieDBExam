import MovieType from '../models/Movie'
import useApiStore from '../stores/api-store'
import useFavoritesStore from '../stores/favorites-store'
import './styles/MovieCardComponent.css'

type Props = {
  movie : MovieType, 
  handleDelete? : () => void
}




function MovieCardComponent({ movie, handleDelete } : Props) {
  const { toggleFavorite } = useFavoritesStore((state) => ({
    toggleFavorite : state.toggleFavorite
  }))

  const { apiKey } = useApiStore.getState()
 
  return (
   <section className="movie-card">
          <img src={movie.poster} alt={`${movie.title} Thumbnail`} className="movie-thumbnail" />
          <h4 className="title">{movie.title}</h4>
          <button className="favorite-btn" onClick={ () => toggleFavorite(movie.imdbid, apiKey ) }>Favorite</button>
          <button className="remove-btn" onClick={ handleDelete }>Delete</button>
   </section>
  )
}

export default MovieCardComponent
