import React from 'react'
import homeLunch from "../fukune-photo/home-lunch.jpg"
import homeDinner from "../fukune-photo/dinner.jpg"
import "./HomeLunchDinner.css"
import { Link } from 'react-router-dom'

const HomeLunchDinner = () => {
  return (
    <div className='lunch-dinner'>
      <Link to="/Lunch" className='lLink'>
      <div className='home-lunch'>
        <h3 className='home-lunch-title'>ランチ</h3>
        <img className='home-lunch-image' src={homeLunch} />
        <p className='home-lunch-p'>　　雅・寿・特上<br/>　　　　三つのコースをご用意しております</p>
      </div>
      </Link>
      <Link to="/Dinner" className='dLink'>
        <div className='home-dinner'>
          <h3>ディナー</h3>
          <img className='home-dinner-image' src={homeDinner}/>
          <p className='home-dinner-p'>　　　旬を知る　美味を知る</p>
        </div>
      </Link>
    </div>
  )
}

export default HomeLunchDinner