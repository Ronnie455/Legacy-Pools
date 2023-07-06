import React, { useState, useEffect } from 'react';
import Servicespic from './assets/Servicespic.png'
import Custompooldesign from './assets/Custompooldesign.png'
import Maintenance from './assets/Maintenance.png'
import Custom from './assets/Custom.png'
import Kitchen from './assets/Kitchen.png'
import Fireplace from './assets/Fireplace.png'

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [Custom, Custompooldesign, Fireplace, Kitchen, Maintenance, Servicespic];
    const [isTransitioning, setIsTransitioning] = useState(false);
    const messages = [
        'Custom Concrete and Coping',
        'Custom Pools and Spas',
        'Fireplaces and Accessories',
        'Outdoor Kitchens',
        'Pool Remodels',
        'The Construction Process'
    ]
  
    const handleNext = () => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 3 ? 0 : prevIndex + 3));
      }
    }
  
    const renderImages = () => {
        return images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <div className="carousel-image" key={index}>
            <img src={image} alt={`Image ${index}`} />
            <p className="carousel-message">{messages[currentIndex + index]}</p>
          </div>
        ))
      }
  
    useEffect(() => {
      if (isTransitioning) {
        const transitionTimeout = setTimeout(() => {
          setIsTransitioning(false);
        }, 0)
  
        return () => {
          clearTimeout(transitionTimeout)
        };
      }
    }, [isTransitioning])
  
    return (
      <div className="carousel">
        <div className={`carousel-images ${isTransitioning ? 'slide-right' : ''}`}>{renderImages()}</div>
        <button className="carousel-button" onClick={handleNext}>
          <div className="carousel-button-top" />
          <div className="carousel-button-bottom" />
        </button>
      </div>
    )
  }
export default Carousel;