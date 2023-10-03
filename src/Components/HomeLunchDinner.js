import React from 'react'
import homeLunch from "../fukune-photo/home-lunch.jpg"
import "./HomeLunchDinner.css"
import { Link } from 'react-router-dom'

const HomeLunch = () => {
  return (
    <div className='lunch-dinner'>
      <Link to="/Lunch">
      <div className='home-lunch'>
        <h3 className='home-lunch-title'>～ランチ～</h3>
        <img className='home-lunch-image' src={homeLunch} />
        <p className='home-lunch-p'>　　雅、寿、特上<br/>　　　　三つのコースをご用意しております。</p>
      </div>
      </Link>
    </div>
  )
}

export default HomeLunch