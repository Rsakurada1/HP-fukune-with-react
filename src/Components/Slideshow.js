import React, { useEffect, useState } from 'react'
import image1 from "./"

const Slideshow = () => {
    const [ currentImageIndex, setCurrentImageIndex] = useState(0);
    const image = [ image1, image2, image3];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                (prevIndex + 1) % faImages.length
            })
        })
    })

  return (
    <div>Slideshow</div>
  )
}

export default Slideshow