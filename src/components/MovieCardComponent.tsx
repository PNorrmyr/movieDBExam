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
          className="thumbnail" />
          <div className='title-container'>
            <Link to={`/movies/${movie.imdbid}`} className='link'>
              <h4 className="title">{movie.title}</h4>
            </Link>
          </div>
          <div className="btns">
            <button className="favorite-btn" onClick={ () => toggleFavorite(movie.imdbid, apiKey ) }>Favorite</button>
            <button className={`remove-btn ${tempClass}`} onClick={ handleDelete }>Delete</button>
          </div>
   </section>
  )
}

export default MovieCardComponent
