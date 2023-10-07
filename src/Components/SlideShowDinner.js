import React, { useEffect, useState } from 'react'
import "./SlideShowDinner.css"
import image1 from "../fukune-photo/maguro.jpg"
import image2 from "../fukune-photo/dinner.jpg"
import image3 from "../fukune-photo/dinner2.jpg"
import image4 from "../fukune-photo/dinner3.jpg"
import image5 from "../fukune-photo/dinner1.jpg"
import image6 from "../fukune-photo/dinner4.jpg"

const images = [image1, image2, image3, image4, image5, image6];

const SlideShowDinner = () => {
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [isEntering2, setIsEntering2] = useState(true);

  useEffect(() => {
    const nextIndex = (currentIndex2 + 1) % images.length;

    const timeoutId = setTimeout(() => {
      setIsEntering2(false);
      setTimeout(() => {
        setCurrentIndex2(nextIndex);
        setIsEntering2(true);
      }, 2000); 
    }, 4000);  

    return () => clearTimeout(timeoutId);
  }, [currentIndex2]);

  return (
    <div className='slide-div2'>
      <img
        src={images[currentIndex2]}
        alt="slideshow2"
        className={isEntering2 ? "slide-entering2" : "slide-leaving2"}
      />
    </div>
  )
}

export default SlideShowDinner