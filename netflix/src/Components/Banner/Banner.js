import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_buttens'>
                <button className='butten'>Play</button>
                <button className='butten'>My List</button>
            </div>
            <h1 className='description'>Your home for the best in World entertainment and exclusive originals</h1>
        </div>
        <div className="fade_bottom"></div>


    </div>
  )
}

export default Banner
