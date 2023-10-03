import React, { useEffect, useState } from 'react'
import "./SlideShow.css"
import image1 from "../fukune-photo/naikan.jpg"
import image2 from "../fukune-photo/maguro.jpg"
import image3 from "../fukune-photo/uni.jpg"

const images = [image1, image2, image3];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEntering, setIsEntering] = useState(true);

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;

    const timeoutId = setTimeout(() => {
      setIsEntering(false);
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setIsEntering(true);
      }, 2000); 
    }, 4000);  

    return () => clearTimeout(timeoutId);
  }, [currentIndex]);

  return (
    <div className='slide-div'>
      <img
        src={images[currentIndex]}
        alt="slideshow"
        className={isEntering ? "slide-entering" : "slide-leaving"}
      />
    </div>
  )
}

export default Slideshow