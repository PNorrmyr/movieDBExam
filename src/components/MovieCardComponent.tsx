import MovieType from '../models/Movie'
import './styles/MovieCardComponent.css'

type Props = {
  movie : MovieType, 
  handleDelete : () => void
}


function MovieCardComponent({ movie, handleDelete } : Props) {
 
  return (
   <section className="movie-card">
          <img src={movie.poster} alt="Movie Thumbnail" className="movie-thumbnail" />
          <h4 className="title">{movie.title}</h4>
          <button className="favorite-btn">Favorite</button>
          <button className="remove-btn" onClick={ handleDelete }>Delete</button>
   </section>
  )
}

export default MovieCardComponent
