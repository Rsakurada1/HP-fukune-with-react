import React from 'react'
import "./Dinner.css"
import Footer from './Footer'
import gaikanNight from "../fukune-photo/dinner-gaikan.jpg"
import Slideshow from './Slideshow'
import drink1 from "../fukune-photo/dinner-sake.jpg"
import drink2 from "../fukune-photo/home-dinner.jpg"
import image1 from "../fukune-photo/maguro.jpg"
import image2 from "../fukune-photo/dinner.jpg"
import image3 from "../fukune-photo/dinner2.jpg"
import image4 from "../fukune-photo/dinner3.jpg"
import image6 from "../fukune-photo/dinner4.jpg"

const Dinner = () => {
  return (
    <div>
      <div className='top'>
        <h3 className='dinner-title'>夜のひととき、<br /><br />　　至極の「おまかせコース」で<br /><br />　　　　　　心を込めておもてなしいたします。</h3>
        <h2 className='dinner'>ディナーはコースで承ります</h2>
        <h1 className='dinner-price'>15,000円</h1>
        <p className='zei'>（税込）</p>
        <h1 className='price-option'>～</h1>
        <p className='dinner-message'>深夜の静けさと共に、当店では、お客様一人一人に丁寧なおもてなしを心がけています。<br />ディナータイムには、「おまかせコース」をご用意しております。<br />
          ディナーでは、丁寧に選ばれた旬の食材を使用し、<br />職人自らが腕によりをかけた7品をご堪能いただけます。<br />
          お料理と共に、厳選された日本酒もご用意しております。<br />
          季節に合った逸品とともに、心地良い時間をお過ごしいただけます。<br />
          お食事と共に、優れた日本酒を味わう、至福の時間をお楽しみください。<br />
          新しい季節を感じる味わい、そして一期一会のおもてなしを、<br />どうぞ心行くまでご堪能くださいませ。<br />
          贅沢なひとときを、当店で過ごしていただければ幸いです。</p>
          <p className='coution-message'>
            ※お好みやアレルギーなどは気軽にお問い合わせください。<br />
            ※ご予約は電話のみで承っております。<br />
            ※お席には限りがございますのでご予約の変更はお早めにご連絡ください。
          </p>
        <img className='gaikanNight' src={gaikanNight}/>
        <Slideshow images={[image1, image2, image3, image4, image6]} className="dinner-slide"/>
      </div>
      <div className='dinner-drink'>
        <h2 className='drink'>日本酒も取り揃えております</h2>
        <img className='drinkimg' src={drink1}/>
        <img className='drinkimg2' src={drink2}/>
        <p className='drink-p'>
          それぞれの時季、蔵元の美味しい日本酒をご用意しております。< br/>
          銘柄などはお気軽にお尋ねください。
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Dinner