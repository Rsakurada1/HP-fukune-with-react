import React, { useEffect, useState } from 'react'
import "./SlideShow.css"

const Slideshow = ({ images, className }) => {
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
  }, [currentIndex, images]);

  return (
    <div className={`slide-div ${className}`}>
      <img
        src={images[currentIndex]}
        alt="slideshow"
        className={isEntering ? "slide-entering" : "slide-leaving"}
      />
    </div>
  )
}

export default Slideshow