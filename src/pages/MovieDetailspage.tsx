import { useParams } from "react-router-dom"
import MovieDetailsComponent from "../components/MovieDetailsComponent"
import NavComponent from "../components/NavComponent"
import { useEffect } from "react"
import useMovieListStore from "../stores/movieList-store"
import MovieType from '../models/Movie'
import './styles/MovieDetailsPage.css'

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
    <section>
        <NavComponent tempClass="hide-page"/>
        <div className="details-page-wrapper">
            { movie ? <MovieDetailsComponent  /> : <p>Fetching Movie</p>}
        </div>
        
    </section>
  )
}

export default MovieDetailspage
