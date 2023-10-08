import React from 'react';
import Copyright from './Copyright';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPhone } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='Footer'>
      <h2>築地すし処 福音</h2>
      <p>ご予約・お問い合わせ　 
      <FontAwesomeIcon icon={faPhone}/>
      03-3544-5568
      </p>
      <p>〒104-0045　東京都中央区築地3-4-6 小竹ビル 1F</p>
      <p className='Footer-p'>営業日　月～土 / 定休日　日曜日・祝日　※不定期でランチをお休みすることがございます、一度ご確認ください</p>
      <p className='Footer-p3'>営業時間　11:45~13:30（ランチ） /  17:30~22:00（ディナー）</p>
      <p>地下鉄日比谷線　築地駅Ａ３出入口徒歩１分</p>
      <p className='Footer-p2'>当店は全席禁煙となっております。駐車場は近くにコインパーキングがございます。</p>
      <Copyright />
    </footer>
  );
}

export default Footer;