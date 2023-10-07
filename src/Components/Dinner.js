import React from 'react'
import "./Dinner.css"
import Footer from './Footer'
import gaikanNight from "../fukune-photo/dinner-gaikan.jpg"

const Dinner = () => {
  return (
    <div>
      <div className='top'>
        <h3 className='dinner-title'>夜のひととき、至極の「おまかせコース」で心を込めておもてなしいたします。</h3>
        <p className='dinner-message'>深夜の静けさと共に、当店では、お客様一人一人に丁寧なおもてなしを心がけています。<br />ディナータイムには、「おまかせコース」をご用意しております。<br />
          ディナーでは、丁寧に選ばれた旬の食材を使用し、料理長自らが腕によりをかけた7品をご堪能いただけます。<br />
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
      </div>
      <div>

      </div>
      <Footer />
    </div>
  )
}

export default Dinner