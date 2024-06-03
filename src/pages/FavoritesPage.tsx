import { Link } from "react-router-dom"
import MovieCardComponent from "../components/MovieCardComponent"
import useFavoritesStore from "../stores/favorites-store"
import NavComponent from "../components/NavComponent"

function FavoritesPage() {
    const { favoriteList } = useFavoritesStore(state => ({
        favoriteList : state.favoriteList
    }))



  return (
    <section className="favorite-page-wrapper">
        <NavComponent tempClass="favorites-page"/>
        <h2>Favorites</h2>
        <Link to={'/home'}>
            <button>Back</button>
        </Link>
        {
            favoriteList.length === 0 ? <h4>No favorites yet</h4> :
            favoriteList.filter((movie) => movie.is_favorite)
                .map((movie) => (
                    <MovieCardComponent 
                    key={movie.imdbid}
                    movie = {movie}
                    tempClass="tempClass"/>
            )) 
        }
    </section>
  )
}

export default FavoritesPage
