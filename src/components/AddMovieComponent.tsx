import { useState } from 'react'
import MovieType from '../models/Movie'
import useApiStore from "../stores/api-store"
import useMovieListStore from '../stores/movieList-store'
import './styles/AddMovieComponent.css'


function AddMovieComponent() {
  const { apiKey } = useApiStore.getState()
  const { addMovie } = useMovieListStore(state => ({addMovie : state.addMovie}))

  const [title, setTitle] = useState<string>('')
  const [poster, setPoster] = useState<string>('')
  const [trailer, setTrailer] = useState<string>('')

  const handleAddMovie = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newMovie : MovieType = {
      title,
      poster,
      trailer_link : trailer,
      imdbid: '',
      is_favorite: false
    }    
    addMovie(newMovie, apiKey)

    setTitle('')
    setPoster('')
    setTrailer('')
  }

  return (
    <section className="add-movie-section">
        <h3>Add Movie</h3>
        <form className="add-movie-form" onSubmit={ handleAddMovie }>
          <input type="text" placeholder="Enter title..." value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" placeholder="Enter poster-link" value={poster} onChange={(e) => setPoster(e.target.value)}/>
          <input type="text" placeholder="Enter trailer-link" value={trailer} onChange={(e) => setTrailer(e.target.value)}/>
          <button className="add-btn" type='submit'>Add Movie</button>
        </form>
    </section>
  )
}

export default AddMovieComponent
