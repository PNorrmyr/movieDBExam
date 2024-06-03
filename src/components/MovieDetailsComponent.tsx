import useMovieListStore from "../stores/movieList-store"



function MovieDetailsComponent() {
    const { movie } = useMovieListStore((state) => ({
        movie : state.movie
    }))

    if(!movie) {
        return <p>Fetching movie</p>
    }

  return (
   <section className="details-component">
    <button className="favorite-btn">Favorite</button>
        <div>
            <h2>{movie.title}</h2>
            <img src={movie.poster} alt={`${movie.title} Thumnail`} />           
            <video src={movie.trailer_link} controls></video>
            
            
        </div>
        
   </section>
  )
}

export default MovieDetailsComponent
