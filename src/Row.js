import React, { useEffect, useState } from 'react'
import "./Row.css";
import axios from './axios';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
 

const base_url="https://image.tmdb.org/t/p/original/";
function Row({title,fetchUrl}) {
    const[movies,setMovies]=useState([]);
    const[trailerurl,setTrailerUrl]=useState("");

    useEffect(()=>
    {
       async function fetchData()
       {
        const request=await axios.get(fetchUrl)
        setMovies(request.data.results);
        return request;
       }
       fetchData();
    },[fetchUrl])
    const opts={
      height:"390",
      width:"100%",
      playerVars:{
        autoplay:1,
      },
    }
    const handleClick=(movie)=>{
      if(trailerurl)
      {
        setTrailerUrl("");
      }else{
        movieTrailer(movie?.name || movie?.title || movie?.original_title ||"")
        .then(url=>{
          const urlParams=new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch((error)=>console.log(error))
      }
    }


  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row_posters'>
            {movies.map(movie=>(
                <img 
                key={movie.id}
                onClick={()=>handleClick(movie)}
                
                 alt='img' className="row_poster" src={`${base_url}${movie.poster_path}`} />


            ))}
            
        </div>
        {trailerurl && <Youtube
        videoId={trailerurl}
        opts={opts}/>}
    </div>
  )
}

export default Row;