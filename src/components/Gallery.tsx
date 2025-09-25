import { useState } from 'react';
import { X } from 'lucide-react';
import gallery1 from '@/assets/gallery1.jpg';
import gallery2 from '@/assets/gallery2.jpg';
import gallery3 from '@/assets/gallery3.jpg';
import gallery4 from '@/assets/gallery4.jpg';
import gallery5 from '@/assets/gallery5.jpg';
import gallery6 from '@/assets/gallery6.jpg';
import gallery7 from '@/assets/gallery7.jpeg';
import gallery8 from '@/assets/gallery8.png';
import gallery9 from '@/assets/gallery9.jpg';
import gallery10 from '@/assets/gallery10.jpg';
import gallery11 from '@/assets/gallery11.jpg';
import gallery12 from '@/assets/gallery12.jpg';


// Gallery items with placeholder names and descriptions
const galleryItems = [
  { 
    src: gallery1, 
    name: 'Peculiar Decoration.', 
    desc: '' 
  },
  { 
    src: gallery2, 
    name: 'Framed Memory.', 
    desc: '' 
  },
  { 
    src: gallery3, 
    name: 'Confronting the Light.', 
    desc: '' 
  },
  { 
    src: gallery4, 
    name: 'Oculi Velati.', 
    desc: "The title is Latin for ‘veiled eyes’. It emphasises the blindfold covering the eyes, symbolising a hidden vision. Due to the dark exposure for this image, the face appears like a mask with the hands coming to cup the face. Almost as if unveiling another mask. This image also has warmer lighting to symbolise a holy attribute." 
  },
  { 
    src: gallery5, 
    name: 'Forced Belief.', 
    desc: '' 
  },
  { 
    src: gallery6, 
    name: 'Unkept Protrait.', 
    desc: '' 
  },
  { 
    src: gallery7, 
    name: 'Burning Divine.', 
    desc: '' 
  },
  { 
    src: gallery8, 
    name: 'Faceless Portraits.', 
    desc: '' 
  },
  { 
    src: gallery9, 
    name: 'Non Serviam.', 
    desc: "Famously attributed to Lucifer, the Latin ‘I will not serve’ contributed to the harsh lighting and confrontational environment. Hanging from a tree. Removing the cloth to defy transgressive behaviour and sin. This photograph’s white balance is much cooler compared to the other four digital images due to the overall sharpness of the image. The angled curves on the naked branches and contorted body appeal to this ideal." 
  },
  { 
    src: gallery10, 
    name: 'Obscura Pietas.', 
    desc: "The title is Latin for ‘obscured piety’. The crouched position and dark settings symbolise a hidden or veiled devotion. The photograph includes a yellow overtone to emphasise the natural golden hour. The light coming from behind the subject creates an almost halo glow, especially with the hair and wings." 
  },
  { 
    src: gallery11, 
    name: 'Baptism.', 
    desc: '' 
  },
  { 
    src: gallery12, 
    name: 'Tranquility.', 
    desc: '' 
  },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [modalTop, setModalTop] = useState<number>(0);

  const openModal = (index: number, event: React.MouseEvent) => {
    const clickedElement = event.currentTarget as HTMLElement;
    const rect = clickedElement.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Position modal at the same Y position as the clicked thumbnail
    setModalTop(rect.top + scrollTop);
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={(e) => openModal(index, e)}
          >
            <img
              src={item.src}
              alt={item.name}
              className="gallery-thumbnail"
            />
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div 
          className="modal-overlay" 
          onClick={handleModalClick}
          style={{ top: modalTop }}
        >
          <div className="modal-content">
            <img
              src={galleryItems[selectedImage].src}
              alt={galleryItems[selectedImage].name}
              className="modal-image"
            />
            <div className="modal-info">
              <h3 className="modal-title">{galleryItems[selectedImage].name}</h3>
              <p className="modal-description">{galleryItems[selectedImage].desc}</p>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="modal-close"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>
      )}
    </>
  );
};