import { create } from "zustand";
import MovieType from '../models/Movie'

type MovieStore = {
    movie : MovieType,
    movieList : MovieType[],
    addMovies : (movies : MovieType[]) => void
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


    addMovies : (movies : MovieType[]) => {
       set({
        movieList : movies
       })
    }

}))

export default useMovieListStore