import React, { useState } from "react";

export default function ImageGallery({ images, frases }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrev() {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }

  function handleNext() {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }

  return (
    <div>
      <img src={images[currentIndex]} alt="Galería" style={{ width: "300px" }} />
      <p>{frases[currentIndex]}</p>
      <div>
        <button onClick={handlePrev}>Anterior</button>
        <button onClick={handleNext}>Siguiente</button>
      </div>
    </div>
  );
}