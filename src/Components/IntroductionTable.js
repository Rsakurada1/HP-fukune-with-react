import React from 'react'
import "./IntroductionTable.css"

const IntroductionTable = () => {
    return (
        <dl className='maytable'>
            <dt>店名</dt>
            <dd>すし処 福音</dd>

            <dt>電話番号</dt>
            <dd>03-3544-5568</dd>

            <dt>住所</dt>
            <dd>東京都中央区築地3-4-6 小竹ビル 1F</dd>

            <dt>アクセス</dt>
            <dd>地下鉄日比谷線　築地駅Ａ３出入口徒歩１分</dd>

            <dt>営業時間</dt>
            <dd>月~金　11:45~13:30（ランチ）/　17:30~22:00（ディナー）<br/>土　11:45~13:30　/　17:30～21:00</dd>

            <dt>総席数</dt>
            <dd>18席（全席禁煙）<br/>カウンター:12席<br/>座敷（個室）:6席</dd>

            <dt>定休日</dt>
            <dd>日曜日・祝日</dd>

            <dt>クレジットカード</dt>
            <dd></dd>

            <dt>出前</dt>
            <dd>無し</dd>          
        </dl>
      );
    };

export default IntroductionTable