import { create } from "zustand";
import MovieType from '../models/Movie'
import axios from "axios";

type MovieStore = {
    movie : MovieType,
    movieList : MovieType[],
    setMovie : (movie : MovieType) => void,
    setMovies : (movies : MovieType[]) => void,
    deleteMovie : (movieId : string, apiKey : string) => void,
    addMovie : (movie : MovieType, apiKey : string) => void
};

const useMovieListStore = create<MovieStore>((set) => ({
    movie : {
        title: "",
        poster: "",
        trailer_link: "",
        imdbid: "",
        is_favorite: false
    },

    setMovie : (movie : MovieType) => {
        set({
            movie : movie
        });

    },

    movieList : [],

    setMovies : (movies : MovieType[]) => {
       set({
        movieList : [...movies]
       });
    },

    deleteMovie : (movieId: string, apiKey: string) => {
        axios.delete(`http://localhost:8080/api/movies/${movieId}?key=${apiKey}`)
            .then(response => {
                set(state => ({movieList: state.movieList.filter(movie => movie.imdbid !== movieId)
                }));
                console.log("Deleted successfully:", response.data);
            })
            .catch(e => {
                console.log("Error deleting movie:", e);
            })
    },

    addMovie : (movie : MovieType, apiKey : string) => {
        const newMovie = {
            "title": `${movie.title}`,
            "poster": `${movie.poster}`,
            "trailer_link": `${movie.trailer_link}`,      
        };

        axios.post(`http://localhost:8080/api/movies?key=${apiKey}`, newMovie)
            .then(response => {
                set(state => ({
                    movieList : [...state.movieList, response.data.data]
                }));
                console.log("Added movie: ", response.data.data);
            })
            .catch(e => {
                console.log("Error adding movie: ", e); 
            });  
        }
    }
))
export default useMovieListStore