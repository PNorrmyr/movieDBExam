import { useEffect } from 'react'
import './App.css'
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage';
import useMovieListStore from './stores/movieList-store'
import useApiStore from './stores/api-store';
import FavoritesPage from './pages/FavoritesPage';
import MovieDetailspage from './pages/MovieDetailspage';

function App() {
  const { movieList, setMovies } = useMovieListStore(state => ({
    movieList : state.movieList,
    setMovies : state.setMovies
  }))

  const {apiKey, setApiKey } = useApiStore((state) => ({
    apiKey : state.apiKey,
    setApiKey : state.setApiKey
}))

  useEffect(() => {
    axios.get('http://localhost:8080/api/keys')
    .then(response => {
      setApiKey(response.data.data); 
    }) 
    .catch(error => {
      console.log(error);
    })
  }, [])

  console.log(apiKey);
  

  useEffect(() => {
    if(apiKey) {
      axios.get(`http://localhost:8080/api/movies?key=${apiKey}`)
      .then(response => {
        setMovies(response.data.data);      
      })
      .catch(error => {
      console.log(error);
      })
    }
  }, [apiKey, setMovies])

  console.log(movieList);

  
  

  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/home' element = {<HomePage />}/>
      <Route path='/favorites' element= {<FavoritesPage />} />
      <Route path='/movies/:movieId' element = {<MovieDetailspage /> }/>
   </Routes>
  )
}

export default App
