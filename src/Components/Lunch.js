import React from 'react'
import "./Lunch.css"
import Footer from "./Footer"
import lunchi1 from "../fukune-photo/lunch1.jpg"
import lunchi2 from "../fukune-photo/lunch2.jpg"
import lunchi3 from "../fukune-photo/lunch3.jpg"

const Lunch = () => {
  return (
    <div className='lunch'>
      <div className='lunch-top'>
        <h2 className='lunch-title'>昼下がりの極上寿司体験 </h2>
        <p className='lunch-message'>
        ご来店いただいたお客様に、ランチでも最高の寿司体験をお届けするため、<br />
        当店では昼の時間帯に「雅」「寿」「特上」の三つのランチコースをご用意しております。<br />
        それぞれのコースには、季節ごとの旬の食材と、職人の技が織り成す絶品のお寿司が揃っています。<br />
        ※季節と仕入れ状況によってメニューが変更することがございます。予めご了承ください。
        </p>
        </div>
        <div className='lunch1'>
          <h3 className='lunchi1h'></h3>
          <img className='lunchi1i' src={lunchi1}/>
          <p className='lunchi1p'></p>
        </div>
        <div className='lunch2'>
        <h3 className='lunchi2h'></h3>
          <img className='lunchi2i' src={lunchi2}/>
          <p className='lunchi2p'></p>
        </div>
        <div className='lunch3'>
        <h3 className='lunchi3h'></h3>
          <img className='lunchi3i' src={lunchi3}/>
          <p className='lunchi3p'></p>
        </div>
      <Footer />
    </div>
  )
}

export default Lunch