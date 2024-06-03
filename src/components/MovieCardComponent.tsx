import { Link } from 'react-router-dom'
import MovieType from '../models/Movie'
import useApiStore from '../stores/api-store'
import useFavoritesStore from '../stores/favorites-store'
import './styles/MovieCardComponent.css'

type Props = {
  movie : MovieType, 
  handleDelete? : () => void,
  tempClass? : string
}




function MovieCardComponent({ movie, handleDelete, tempClass} : Props) {
  const { toggleFavorite } = useFavoritesStore((state) => ({
    toggleFavorite : state.toggleFavorite
  }))

  const { apiKey } = useApiStore.getState()
 
  return (
   <section className="movie-card">
          <img src={movie.poster} alt={`${movie.title} Thumbnail`} 
          className="movie-thumbnail" />
          <Link to={`/movies/${movie.imdbid}`}>
            <h4 className="title">{movie.title}</h4>
          </Link>
          <button className="favorite-btn" onClick={ () => toggleFavorite(movie.imdbid, apiKey ) }>Favorite</button>
          <button className={`remove-btn ${tempClass}`} onClick={ handleDelete }>Delete</button>
   </section>
  )
}

export default MovieCardComponent
