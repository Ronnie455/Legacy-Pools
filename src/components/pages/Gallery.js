import React, { useState } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import NoWaveFooter from '../NoWaveFooter';
import ImageGallery from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import Backgroundpic2 from '../assets/Backgroundpic2.png';
import Backgroundpic3 from '../assets/Backgroundpic3.png';
import Backgroundpic4 from '../assets/Backgroundpic4.png';
import Gallerypic1 from '../assets/Gallerypic1.png';
import Gallerypic2 from '../assets/Gallerypic2.png';
import Gallerypic3 from '../assets/Gallerypic3.png';
import Gallerypic4 from '../assets/Gallerypic4.png';
import Gallerypic5 from '../assets/Gallerypic5.png';
import Gallerypic6 from '../assets/Gallerypic6.png';
import Gallerypic7 from '../assets/Gallerypic7.png';
import Gallerypic8 from '../assets/Gallerypic8.png';
import Gallerypic9 from '../assets/Gallerypic9.png';
import Gallerypic10 from '../assets/Gallerypic10.png';
import Gallerypic11 from '../assets/Gallerypic11.png';
import Gallerypic12 from '../assets/Gallerypic12.png';
import Gallerypic13 from '../assets/Gallerypic13.png';
import Gallerypic14 from '../assets/Gallerypic14.png';

const imageUrls = [
  Gallerypic1,
  Backgroundpic2,
  Backgroundpic3,
  Backgroundpic4,
  Gallerypic2,
  Gallerypic3,
  Gallerypic4,
  Gallerypic5,
  Gallerypic6,
  Gallerypic7,
  Gallerypic8,
  Gallerypic9,
  Gallerypic10,
  Gallerypic11,
  Gallerypic12,
  Gallerypic13,
  Gallerypic14,
  // Add the remaining image URLs or paths here
  // Make sure to have a total of 17 elements in the array
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const renderImages = () => {
    return imageUrls.map((imageUrl, index) => (
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0' key={index}>
        <div
          className='image-container'
          onClick={() => openLightbox(index)}
        >
          <LazyLoadImage
            src={imageUrl}
            effect='opacity'
            className='w-100 shadow-1-strong rounded mb-4'
            alt={`Image ${index + 1}`}
          />
        </div>
      </MDBCol>
    ));
  };

  return (
    <div className='mdb-container'>
      <MDBRow>{renderImages()}</MDBRow>
      {lightboxOpen && (
        <ImageGallery
          mainSrc={imageUrls[currentImageIndex]}
          nextSrc={imageUrls[(currentImageIndex + 1) % imageUrls.length]}
          prevSrc={
            imageUrls[
              (currentImageIndex + imageUrls.length - 1) % imageUrls.length
            ]
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setCurrentImageIndex(
              (currentImageIndex + imageUrls.length - 1) % imageUrls.length
            )
          }
          onMoveNextRequest={() =>
            setCurrentImageIndex((currentImageIndex + 1) % imageUrls.length)
          }
          animationDuration={300}
          enableZoom={false}
          reactModalStyle={{ overlay: { zIndex: 1042 } }}
        />
      )}
      <NoWaveFooter />
    </div>
  );
};

export default Gallery;



