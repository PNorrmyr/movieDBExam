import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)
  let key = '';

  useEffect(() => {
    
  })

  useEffect(() => {
    //Hämta filmer
axios.get(`http://localhost:8080/api/movies?key=${key}`)
.then(response => {
  console.log(response.data);
})
//Lägga till film
const newMovie = {
  "title": "test",
  "poster": "",
  "trailer_link":""
}
axios.post()
  }, []);

  return (
<div className="app">
  test
</div>
  )
}

export default App
