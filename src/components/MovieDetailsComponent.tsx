import { useNavigate } from "react-router-dom"
import useMovieListStore from "../stores/movieList-store"
import './styles/MovieDetailsComponent.css'



function MovieDetailsComponent() {
    const { movie } = useMovieListStore((state) => ({
        movie : state.movie
    }))
    const navigate = useNavigate()

    if(!movie) {
        return <p>Fetching movie</p>
    }



  return (
   <section className="details-component">
    <h2>{movie.title}</h2>
    <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
    <div className="info">
        <img src={movie.poster} alt={`${movie.title} Thumnail`}/>           
        <video src={movie.trailer_link} controls></video>            
    </div>
        
   </section>
  )
}

export default MovieDetailsComponent
