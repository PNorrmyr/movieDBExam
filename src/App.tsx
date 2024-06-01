import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage'

function App() {
  const [count, setCount] = useState(0)
  const [movieList, setMovieList] = useState<[]>([])
  const [key, setKey] = useState<string>('')

  useEffect(() => {
    axios.get('http://localhost:8080/api/keys')
    .then(response => {
      setKey(response.data.data) 
    }) 
    .catch(error => {
      console.log(error);
    })
  }, [])
  console.log('API nyckel' + key);


  useEffect(() => {
    axios.get(`http://localhost:8080/api/movies?key=${key}`)
    .then(response => {
      setMovieList(response.data.data);      
    })
    .catch(error => {
    console.log(error);
    })
  }, [setKey])
  console.log(movieList);

//Lägga till film
const newMovie = {
  "title": "test",
  "poster": "",
  "trailer_link":""
}

  return (
    <Routes>
      <Route path='/' element={<LoginPage />}/>
  
   </Routes>
  )
}

export default App
