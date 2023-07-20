import { useState, useEffect } from "react"
import MovieBox from "../components/MovieBox"

const MOV_API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=e9152176f23675a3926b8ae82b5829dd"

function Movies() {
  const[movies, setMovies]=useState<any>([])
  
  useEffect(() => {
    fetch(MOV_API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data)
      setMovies(data.results)
    })
  }, [])

  

  return (
    <div className="movie_container">
      <div className="movie_grid  text-emerald-950 font-semibold">
        {movies.map((movieReq)=>
        <MovieBox key={movieReq.id} {...movieReq} />)}
      </div>
    </div>
  )
}

export default Movies