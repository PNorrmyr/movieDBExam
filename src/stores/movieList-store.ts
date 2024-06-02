import { create } from "zustand";
import MovieType from '../models/Movie'

type MovieStore = {
    movie : MovieType,
    movieList : MovieType[],
    setMovies : (movies : MovieType[]) => void
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
    }

}))

export default useMovieListStore