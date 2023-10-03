import React from 'react'
import Slideshow from './Slideshow'
import "./Home.css"
import Footer from './Footer';

const Home = () => {
  return (
    <div className='top-div'>
      <div className='catch-p-c'>
        <h3 className='catch-p'>旬の恵み、師の技。一皿で四季を感じる。</h3>
      </div>
      <div className='message'>
      <p className="catch-p">
        　　　　　　　　　　　　　　　　築地の匠、25年の軌跡を刻む 福音 へようこそ。<br />
        ここは、築地の喧騒を忘れさせる、ひときわ落ち着いた空間。お店を訪れた瞬間から、心がゆったりとした時間へと誘われます。扉を開けると、そこには25年間、寿司の極みを追求し続ける匠の技が息づいています。
        当店では、新鮮なる豊洲市場からの直送ネタを中心に、一貫一貫、職人が真心を込めて握ります。豊洲から届く鮮度抜群の魚たちは、その日の海の恵みを最高の状態で味わっていただけます。『味に妥協しない』、それが当店のこだわりです。
        店内は、静かで上品な雰囲気に包まれ、選りすぐりの素材が織りなす味わい深いすしをじっくりとご堪能いただけます。また、個室もご用意しておりますので、大切な方との特別なひとときをお過ごしいただけます。
        心からのおもてなしと、職人自慢のすしを心ゆくまでお楽しみください。築地で、そして東京で、これ以上ないほどの寿司体験をお約束します。
      </p>
      </div>
    <Slideshow />
    <Footer />
    </div>
  )
}

export default Home