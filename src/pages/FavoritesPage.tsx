import { Link } from "react-router-dom"
import MovieCardComponent from "../components/MovieCardComponent"
import useFavoritesStore from "../stores/favorites-store"

function FavoritesPage() {
    const { favoriteList } = useFavoritesStore(state => ({
        favoriteList : state.favoriteList
    }))



  return (
    <section className="favorite-page-wrapper">
        <h2>Favorite Movies</h2>
        <Link to={'/home'}>
            <button>Back</button>
        </Link>
        {
            
            favoriteList.filter((movie) => movie.is_favorite)
                .map((movie) => (
                    <MovieCardComponent 
                    key={movie.imdbid}
                    movie = {movie}/>
            )) 
        }
    </section>
  )
}

export default FavoritesPage
