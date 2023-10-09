import React from 'react';
import Image from 'next/image';

const ImageModal = ({ isOpen, imageSrc,currentIndex, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const currentImage = imageSrc[currentIndex];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-75" onClick={onClose} />
      <div className="relative">
        <div className="flex items-center justify-center w-screen h-screen">
          {/* Center the image within a flex container */}
          <Image src={imageSrc} alt="Enlarged" className="max-w-full h-[90%]" />
        </div>
        <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-8">
           {/* Add FontAwesome arrow icon with dark color */}
           <i className="fas fa-arrow-left text-dark" />
        </button>
        <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-8">
           {/* Add FontAwesome arrow icon with dark color */}
           <i className="fas fa-arrow-right text-dark" />
        </button>
        <button className="absolute top-4 right-4 rounded-full bg-red-500 p-8">
            {/* Add FontAwesome close icon with white color */}
            <i className="fas fa-times text-white" />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
