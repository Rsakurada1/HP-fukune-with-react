import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStore, faUtensils, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <header className='header'>
        <div>
            <h2 className='storeName'>すし処 福音</h2>
        </div>
    <nav>
        <Link to="/">
            <FontAwesomeIcon icon={faHome} />
            ホーム</Link>
        <Link to="/Introduction">
            <FontAwesomeIcon icon={faStore} />   
            店舗紹介</Link>
        <Link to="/Lunch">
            <FontAwesomeIcon icon={faUtensils} />
            ランチ</Link>
        <Link to="/Dinner">
            <FontAwesomeIcon icon={faUtensils} />
            ディナー</Link>
        <Link to="/Access">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            アクセス</Link>
    </nav>
    </header>
  )
}

export default Navbar