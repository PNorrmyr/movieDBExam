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
            set(state => ({
                 favoriteList : [...state.favoriteList, response.data.data]
            }))
            console.log(`Movie is favorite: `, response.data.data.is_favorite);
        })
        .catch(e => {
            console.log('Something went wrong ', e);
        })

    }
    




    

}))

export default useFavoritesStore