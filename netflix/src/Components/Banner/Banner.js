import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from '../../axios' // we calling custome axios not installed axios
import { API_KEY, imageUrl } from '../../constants/constants';

function Banner() {

  const [movie, setMovie] = useState()
  // we only need movie data when banner is mount, so we can use useeffect feature
  // useeffect run first time
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
      console.log(Response.data.results)
      setMovie(Response.data.results[1])
    }) 
  },[])


  

  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}
     className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title: ""}</h1>
            <div className='banner_buttens'>
                <button className='butten'>Play</button>
                <button className='butten'>My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview:""}</h1>
        </div>
        <div className="fade_bottom"></div>


    </div>
  )
}

export default Banner
