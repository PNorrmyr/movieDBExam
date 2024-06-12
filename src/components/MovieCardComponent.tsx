import { Link } from 'react-router-dom'
import MovieType from '../models/Movie'
import useApiStore from '../stores/api-store'
import useFavoritesStore from '../stores/favorites-store'
import './styles/MovieCardComponent.css'
import { useEffect, useState } from 'react'

type Props = {
  movie : MovieType, 
  handleDelete? : () => void,
  tempClass? : string
}




function MovieCardComponent({ movie, handleDelete, tempClass} : Props) {
  const { toggleFavorite, favoriteList } = useFavoritesStore((state) => ({
    toggleFavorite : state.toggleFavorite,
    favoriteList : state.favoriteList
  }))

  const { apiKey } = useApiStore.getState()
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  useEffect(()=> {
    setIsFavorite(favoriteList.some(m => m.imdbid === movie.imdbid))
  },[favoriteList, movie.imdbid])

  const handleFavoriteClick = () => {
    toggleFavorite(movie.imdbid, apiKey)
    setIsFavorite((prev) => !prev)
  }

  
 
  return (
   <section className="movie-card">
          <img src={movie.poster} alt={`${movie.title} Thumbnail`} 
          className="thumbnail" />
          <div className='title-container'>
            <Link to={`/movies/${movie.imdbid}`} className='link'>
              <h4 className="movie-title">{movie.title}</h4>
            </Link>
          </div>
          <div className="btns">
            <div className='favorite-icon' onClick={ () => handleFavoriteClick() }>
              {
                isFavorite ? 
                  <i className="fa-solid fa-star"></i>
                 : 
                  <i className="fa-regular fa-star"></i>  
              }
            </div>
            <div className={`delete-icon ${tempClass}`} onClick={ handleDelete }>
              <i className={`fa-solid fa-trash ${tempClass}`}></i>
            </div>
          </div>
   </section>
  )
}

export default MovieCardComponent
