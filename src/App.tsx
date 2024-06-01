import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage';
import useMovieListStore from './stores/movieList-store'

function App() {
  const [key, setKey] = useState<string>('')
  const { movieList, addMovies } = useMovieListStore(state => ({
    movieList : state.movieList,
    addMovies : state.addMovies
  }))

  useEffect(() => {
    axios.get('http://localhost:8080/api/keys')
    .then(response => {
      setKey(response.data.data); 
    }) 
    .catch(error => {
      console.log(error);
    })
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:8080/api/movies?key=${key}`)
    .then(response => {
      addMovies(response.data.data);      
    })
    .catch(error => {
    console.log(error);
    })
  }, [key, addMovies])

  console.log('movieList ' + movieList);
//Lägga till film
const newMovie = {
  "title": "test",
  "poster": "",
  "trailer_link":""
}

  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/home' element = {<HomePage />}/>
   </Routes>
  )
}

export default App
