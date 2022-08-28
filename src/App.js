import { useState } from 'react';
import './App.css';
import { data } from './data'

function App() {
  const [films, setFilms]= useState(data);
  const [showDescription, setShowDescription] = useState(false)
  const removeFilms = (id) =>{
    let newFilms = films.filter(film => film.id !== id)
    setFilms(newFilms)
  }
  const [movies, setPerson] = useState(0);
  const{image} = data[movies]
  const previousFilm = () =>{
    setPerson(movies =>{
      movies--;
      if (movies < 0){
        return data.length-1;
      }
      return movies;
    })  
  }
  const nextFilm = ()=> {
    setPerson(movies =>{
      movies++;
      if (movies > data.length-1){
        movies = 0
      }
      return movies;
    })
  }
  return(
    <div>
      <div>
        <img src ={image} width = '300px' alt = 'person'/>
      </div>
      <div>
      <button onClick={previousFilm}>Previous</button>
      <button onClick={nextFilm}>Next</button>
    </div>
      <div>
        <h1>List of {films.length} movies</h1>
      </div>
      {films.map(movie => {
        const {id, title, description, image} = movie;
        return(
          <div>
            <h2> {id} -{title}</h2>
            <h3>{showDescription ? description : description.substring(0,0)+ '...'} <button onClick={()=> setShowDescription(!showDescription)}>{showDescription ? "show less" : 'Show description'} </button></h3>
            <img src = {image} width ='300px' alt='picture'/>
            <button onClick={()=> removeFilms(id)}> remove</button>
          </div>

        )
      })}
      <div>
        <button onClick={() => setFilms([])}>Delete all</button>
      </div>
    </div>
  )
}

export default App;
