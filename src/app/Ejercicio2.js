import React, { useState } from "react";

export default function ImageGallery({ images, frases }) {
  const [IndexActual, setIndexActual] = useState(0);

  function handlePrev() {
    setIndexActual((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }

  function handleNext() {
    setIndexActual((next) => (next < images.length - 1 ? next + 1 : 0));
  }

  return (
    <div>
      <img src={images[IndexActual]} alt="Galería"/>
      <p>{frases[IndexActual]}</p>
      <div>
        <button onClick={handlePrev}>Anterior</button>
        <button onClick={handleNext}>Siguiente</button>
      </div>
    </div>
  );
}