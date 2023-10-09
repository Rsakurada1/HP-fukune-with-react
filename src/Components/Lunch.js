import React, { useEffect, useRef } from 'react'
import "./Lunch.css"
import Footer from "./Footer"
import lunchi1 from "../fukune-photo/lunch1.jpg"
import lunchi2 from "../fukune-photo/lunch2.jpg"
import lunchi3 from "../fukune-photo/lunch3.jpg"


const Lunch = () => {
  const contentRefs = useRef([]);
  contentRefs.current = new Array(3).fill(null).map(
    (_, i) => contentRefs.current[i] || React.createRef()
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('isVisible');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    contentRefs.current.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup
    return () => {
      contentRefs.current.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className='lunchi'>
      <div className='lunch-top'>
        <h2 className='lunch-title'>昼下がりの極上寿司体験 </h2>
        <p className='lunch-message'>
        ご来店いただいたお客様に、ランチでも最高の寿司体験をお届けするため、<br />
        当店では昼の時間帯に「雅」「寿」「特上」の三つのランチコースをご用意しております。<br />
        それぞれのコースには、季節ごとの旬の食材と、職人の技が織り成す絶品のお寿司が揃っています。<br />
        ※季節や仕入れ状況によってメニューが変更することがございます。予めご了承ください。
        </p>
        </div>
        <div className='lunchi1' ref={contentRefs.current[0]}>
          <h2 className='lunchi1h'>『雅』-Miyabi-</h2>
          <h3 className='lunchi1-price'>1,650円</h3>
          <p className='zei1'>（税込）</p>
          <h3 className='lunchi1-title'>やさしい価格で、極上の味を</h3>
          <h4 className='lunchi1-introduction'>入門となる「雅」コースでは、厳選された新鮮なネタを使用し、職人が一貫一貫丁寧に握ります。ここから始まる、寿司の旅を心ゆくまでご堪能ください。</h4>
          <img className='lunchi1i' src={lunchi1}/>
        </div>
        <div className='lunchi2' ref={contentRefs.current[1]}>
        <h2 className='lunchi2h'>『寿』-Kotobuki-</h2>
        <h3 className='lunchi2-price'>2,200円</h3>
        <p className='zei2'>（税込）</p>
        <h3 className='lunchi2-title'>バラエティに富んだ、楽しい逸品を</h3>
        <h4 className='lunchi2-introduction'>「寿」コースでは、基本のラインナップに加え、さらにバラエティ豊かな逸品をご堪能いただけます。季節の食材を活かした、彩り鮮やかな一皿をお楽しみください。</h4>
          <img className='lunchi2i' src={lunchi2}/>
        </div>
        <div className='lunchi3' ref={contentRefs.current[2]}>
        <h2 className='lunchi3h'>『特上』-Tokujou-</h2>
        <h3 className='lunchi3-price'>4,600円</h3>
        <p className='zei3'>（税込）</p>
        <h3 className='lunchi3-title'>究極の贅沢、一期一会の味わいを</h3>
        <h4 className='lunchi3-introduction'>最上級コース「特上」では、最高品質の食材を惜しみなく使用し、寿司職人の技が煌めく極上の味わいを提供いたします。特別な時間を、特別なお寿司と共に。</h4>
          <img className='lunchi3i' src={lunchi3}/>
        </div>
        <div className='Lunch-Footer'>
      <Footer />
      </div>
    </div>
  )
}

export default Lunch