import React, { useEffect, useState } from 'react'

// Display the slideshow of image

const SlideShow = ({images, interval = 3000}) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((currentImageIndex) => (currentImageIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(intervalId);
    }, [images.length, interval]);

  return (
    <img src={images[currentImageIndex]} alt="Slideshow" />
  )
}

export default SlideShow