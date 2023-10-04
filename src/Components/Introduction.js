import React from 'react'
import Footer from "./Footer"
import noren from "../fukune-photo/noren.jpg"
import gaikan from "../fukune-photo/gaikan.jpg"
import "./Introduction.css"
import IntroductionTable from "./IntroductionTable"
import zasekiCounter from "../fukune-photo/zaseki-counter2.jpg"

const Introduction = () => {
  return (
    <div>
      <div className='I-image-div'>
        <img className='I-image' src={noren} alt="Noren"/>
      </div>
      <div className='table'>
      <h3>店舗情報</h3>
        <IntroductionTable />
        <img className='Introduction' src={gaikan}/>
      </div>
      <div>
        <div className='counter'>
          <h3 className='c-h3'>カウンター</h3>
          <img className='zaseki-counter' src={zasekiCounter}/>
          <h4>「一期一会」の旬を、匠の技と共に</h4>
          <p>
            店主の仕事が見える寿司屋の醍醐味であるカウンター席。12名様までご利用いただけます。カジュアルな接待や誕生日・記念日ディナー、デートの食事などにおすすめです。
            寿司を一貫一貫、ゆっくりと時間をかけてお召し上がりください。また、ご不明点やお好みなどございましたら、どうぞお気軽にお声がけください。
          </p>
        </div>
      </div>
        <div className='Map-div'>
          <iframe className='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3514136283866!2d139.77118927637378!3d35.66834823068062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188961ccd0c5d1%3A0xa646f00f81606b78!2z56-J5Zyw44GZ44GX5Yem56aP6Z-z!5e0!3m2!1sja!2sjp!4v1696412671036!5m2!1sja!2sjp" 
          width="1000" 
          height="600" 
          style={{border: "0"}}
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      <Footer />
    </div>
  )
}

export default Introduction