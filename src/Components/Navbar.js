import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStore, faUtensils, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  return (
    <header className='header'>
        <div className='storeNameDiv'>
            <h2 className='storeName'>すし処 福音</h2>
            <h4>ご予約・お問い合わせ　
                <FontAwesomeIcon icon={faPhone}/>
                03-3544-5568
            </h4>
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