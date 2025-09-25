import { useState, useEffect } from 'react';
import slideshow1 from '@/assets/slideshow1.jpg';
import slideshow2 from '@/assets/slideshow2.jpg';
import slideshow3 from '@/assets/slideshow3.jpg';

const slideshowImages = [
  { src: slideshow1, alt: 'Slide Image 1' },
  { src: slideshow2, alt: 'Slide Image 2' },
  { src: slideshow3, alt: 'Slide Image 3' },
];

export const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getPrevIndex = () => (currentSlide - 1 + slideshowImages.length) % slideshowImages.length;
  const getNextIndex = () => (currentSlide + 1) % slideshowImages.length;

  return (
    <div className="slideshow-container-new">
      {/* Previous Image */}
      <div 
        className="slideshow-side slideshow-prev-image"
        onClick={() => goToSlide(getPrevIndex())}
      >
        <img
          src={slideshowImages[getPrevIndex()].src}
          alt={slideshowImages[getPrevIndex()].alt}
          className="slideshow-image-side"
        />
      </div>

      {/* Current Image */}
      <div className="slideshow-center">
        <img
          src={slideshowImages[currentSlide].src}
          alt={slideshowImages[currentSlide].alt}
          className="slideshow-image-center"
        />
      </div>

      {/* Next Image */}
      <div 
        className="slideshow-side slideshow-next-image"
        onClick={() => goToSlide(getNextIndex())}
      >
        <img
          src={slideshowImages[getNextIndex()].src}
          alt={slideshowImages[getNextIndex()].alt}
          className="slideshow-image-side"
        />
      </div>
    </div>
  );
};