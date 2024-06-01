import MovieType from '../models/Movie'

type Props = {
  movie : MovieType 
}


function MovieCardComponent({ movie } : Props) {
 
  return (
   <section className="movie-card">
          <img src={movie.poster} alt="Movie Thumbnail" className="movie-thumbnail" />
          <h4 className="title">{movie.title}</h4>
          <button className="favorite-btn">Favorite</button>
          <button className="remove-btn">Delete</button>
   </section>
  )
}

export default MovieCardComponent
