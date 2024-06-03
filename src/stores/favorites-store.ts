import { create } from 'zustand'
import Movietype from '../models/Movie'
import axios from 'axios'


type FavoritesStore = {
    favoriteList : Movietype[]
    toggleFavorite : (movieId : string, apiKey : string) => void
}

const useFavoritesStore = create<FavoritesStore>((set) => ({

    favoriteList : [],

    toggleFavorite : (movieId : string, apiKey : string) => {
        axios.put(`http://localhost:8080/api/movies/${movieId}?key=${apiKey}`)
        .then(response => {
            const movie : Movietype = response.data.data
            set(state => {
                if(movie.is_favorite){
                    const exist = state.favoriteList.some(m => m.imdbid === movieId)
                    if(!exist){
                        return { favoriteList: [...state.favoriteList, movie]}
                    }
                } else {
                    return { favoriteList: state.favoriteList.filter(m => m.imdbid !== movieId)}
                }
                return state
            })
        })
        .catch(error => {
            console.log('Something went wrong ', error);
        }) 
    }
}))

export default useFavoritesStore


