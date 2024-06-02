import { create } from "zustand";
import MovieType from '../models/Movie'
import axios from "axios";

type MovieStore = {
    movie : MovieType,
    movieList : MovieType[],
    setMovies : (movies : MovieType[]) => void,
    deleteMovie : (movieId : string, apiKey : string) => void
}



const useMovieListStore = create<MovieStore>((set) => ({
    movie : {
        title: '',
        imdbid: '',
        poster: '',
        trailer_link: '',
        is_favorite: false
    },

    movieList : [],

    setMovies : (movies : MovieType[]) => {
       set({
        movieList : [...movies]
       })
    },
    
    deleteMovie : (movieId: string, apiKey: string) => {
        axios.delete(`http://localhost:8080/api/movies/${movieId}?key=${apiKey}`)
        .then(response => {
            set(state => ({movieList: state.movieList.filter(movie => movie.imdbid !== movieId)
            }));
            console.log("Deleted successfully:", response.data);
        })
        .catch(error => {
            console.log("Error deleting movie:", error);
        });

}}))

export default useMovieListStore