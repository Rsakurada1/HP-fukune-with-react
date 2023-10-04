import React from 'react'
import "./Lunch.css"
import Footer from "./Footer"

const Lunch = () => {
  return (
    <div>
      <div className='lunch-top'>
        <h2 className='lunch-title'>昼下がりの極上寿司体験 </h2>
        <p className='lunch-message'>
        ご来店いただいたお客様に、ランチでも最高の寿司体験をお届けするため、<br />
        当店では昼の時間帯に「雅」「寿」「特上」の三つのランチコースをご用意しております。<br />
        それぞれのコースには、季節ごとの旬の食材と、職人の技が織り成す絶品のお寿司が揃っています。<br />
        ※季節と仕入れ状況によってメニューが変更することがございます。予めご了承ください。
        </p>
        <div className='lunch1'>

        </div>
        <div className='lunch2'>

        </div>
        <div className='lunch3'>
          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Lunch