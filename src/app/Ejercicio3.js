import React, { useState } from "react";
import Book from "./Book"; // EL componente Book está en otro archivo (es el hijo de Library y este es el padre) 

export default function Library({ libros }) {
  const [Libros, setLibros] = useState(libros);

  function editarLibros(index, nuevoTitulo) {
    const updatedLibros = [...Libros];
    updatedLibros[index] = nuevoTitulo;
    setLibros(updatedLibros);
  }

  return (
    <div>
      <ul>
        {Libros.map((libro, index) => (
          <Book 
            key={index} 
            titulo={libro} 
            onEdit={(nuevoTitulo) => editarLibros(index, nuevoTitulo)} 
          />
        ))}
      </ul>
    </div>
  );
}