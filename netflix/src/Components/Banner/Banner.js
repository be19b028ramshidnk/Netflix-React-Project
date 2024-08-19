import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from '../../axios' // we calling custome axios not installed axios
import { API_KEY, imageUrl } from '../../constants/constants';

function Banner() {

  const [movies, setMovies] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0); // Store the current movie index
  const [sliding, setSliding] = useState(false); // Track the sliding state



  // we only need movie data when banner is mount, so we can use useeffect feature
  // useeffect run first time
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((Response)=>{
      console.log(Response.data.results)
      setMovies(Response.data.results)
    }) 
  },[])

  useEffect(() => {
    const interval = setInterval(() => {
      setSliding(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === movies.length - 1 ? 0 : prevIndex + 1
        );
        setSliding(false);
      }, 500); // Sync with the CSS transition duration
    }, 5000); // Change movie every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [movies]);

  const currentMovie = movies[currentIndex]; // Get the current movie to display


  const handleIndicatorClick = (index) => {
    if (index !== currentIndex) {
      setSliding(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setSliding(false);
      }, 500); // Sync with the CSS transition duration
    }
  };



  

  return (
    <div className='banner' style={{backgroundImage:`url(${currentMovie ? imageUrl+currentMovie.backdrop_path:""})`}}>
        <div className={`content ${sliding ? 'sliding' : ''}`}>
            <h1 className='title'>{currentMovie ? currentMovie.title: ""}</h1>
            <div className='banner_buttens'>
                <button className='butten'>Play</button>
                <button className='butten'>My List</button>
            </div>
            <h1 className='description'>{currentMovie ? currentMovie.overview:""}</h1>
        </div>

        {/* Carousel Indicators */}
        <div className='carousel-indicators'>
          {movies.map((movie, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
            ></span>
          ))}
        </div>

        <div className="fade_bottom"></div>


    </div>
  )
}

export default Banner
