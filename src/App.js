import { useState } from 'react';
import './App.css';
import { data } from './data'

function App() {
  const [film, setFilm] = useState (0)
  const{id, title, description, image} = data[film]
  const previousTitle = () =>{
    setFilm(film =>{
      film--;
      if (film < 0){
        return data.length -1
      }
      return film
    })
  }
  const nextTitle = () =>{
    setFilm(film =>{
      film++;
      if (film > data.length-1){
        film = 0
      }
      return film;
    })
  }

  return (
    <div>
      <div>
        <h1>Mультфильмы</h1>
      </div>
      
          <div className='slide'>
            <div>
              <button onClick={previousTitle}>❮</button>
            </div>

            <div>
              <h2>{title}</h2>
              <img src={image} width = '300px'/>
            </div>
    
            <div>
              <button onClick={nextTitle}>❯</button>
            </div>
          </div>
    
      <div>
      <input/>
      </div>
        
        
      
      <div>
        <button>CCCP</button>
        <button>Российские</button>
        <button>Disney</button>
        <button>Illumination</button>
        <button>Pixar</button>
      </div>
      <div>
        <h3>
          
        </h3>
      </div>
      <div>
              <h2>{title}</h2>
              <img src={image} width = '300px'/>
            </div>
    </div>
  );
}

export default App;
