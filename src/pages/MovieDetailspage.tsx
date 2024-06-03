import { useParams } from "react-router-dom"
import MovieDetailsComponent from "../components/MovieDetailsComponent"
import NavComponent from "../components/NavComponent"
import { useEffect } from "react"
import useMovieListStore from "../stores/movieList-store"
import MovieType from '../models/Movie'

function MovieDetailspage() {
    const {movieId} = useParams<string>()
    const {movieList, setMovie, movie} = useMovieListStore((state) => ({
        movieList : state.movieList,
        setMovie : state.setMovie,
        movie : state.movie
    }))

    useEffect(() => {
        if(movieId !== undefined){
            const selectedMovie : MovieType | undefined = movieList.find(movie => movie.imdbid === movieId)

            if(selectedMovie === undefined) {
                console.log('Movie not found');
            } else {
                setMovie(selectedMovie)
            }
        }
    }, [movieId, movieList, setMovie])


  return (
    <section className="details-page-wrapper">
        <NavComponent tempClass="favorites"/>
        { movie ? <MovieDetailsComponent  /> : <p>Fetching Movie</p>}
        
    </section>
  )
}

export default MovieDetailspage
