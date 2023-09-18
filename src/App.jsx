import { useEffect, useState } from 'react'
import Moviecart from './Moviecart'
import searchIcon from './icons8-search.svg';
// import MovieCard from "./MovieCard.jsx";
import './App.css'





function App() {
  const[searchterm,setsearchterm]=useState('');
  const [movies, setMovies] = useState([]);
  
  const url='http://www.omdbapi.com/?apikey=352aa049'
  
const Searchmovie= async (title)=>{
    const data=await fetch(`${url}&s=${title}`)
    const respo=await data.json();
    setMovies(respo.Search);
    // console.log(respo.Search)
    // return respo;
}

  useEffect(()=>{
    Searchmovie('superman');
  },[]);

  const movie1=
    {
      "Title": "Girl Next door",
      "Year": "2019",
      "imdbID": "tt11758836",
      "Type": "movie",
      "Poster": "N/A"
  }
  // console.log("this are movies list");
  // console.log(movies.Year);
  
  return (
    <div className="app">
      <h1>MovieLander</h1>
      <div className="search">
        <input type="text" placeholder='search for the movies' value={searchterm}
        onChange={(e)=>setsearchterm(e.target.value)}
        />
        <img src="https://img.icons8.com/color/48/000000/search--v1.png" alt="search--v1" 
        onClick={()=>Searchmovie(searchterm)}
        />
      </div>

      
      {movies?.length > 0 ? (
      
        <div className="container">
           {movies.map((movie)=>(
            <Moviecart movie={movie}/>
           ))}
        </div>
      ):
      (
        <div className="empty">
          <h2>No movie found</h2>
        </div>
      )}
      
    </div>
  )
}

export default App
