import React from 'react'
import Slideshow from './Slideshow'
import "./Home.css"

const Home = () => {
  return (
    <div>
      <div className='catch-p-c'>
        <h3 className='catch-p'>旬の恵み、師の技。一皿で四季を感じる。</h3>
      </div>
    <Slideshow />
    </div>
  )
}

export default Home