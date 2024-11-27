import React, { useState } from "react";

export default function Book({ titulo, onEdit }) {
  const [editandose, setEditandose] = useState(false);
  const [nuevoTitulo, setNuevoTitulo] = useState(titulo);

  // Función para editar los títulos, establece a true que se esté editando para que así se pueda editar y cambiar el botón
  function handleEditClick() {
    setEditandose(true);
  }

  // Función para guardar los nuevos títulos
  function handleUpdateClick(e) {
    e.preventDefault();
    onEdit(nuevoTitulo);
    setEditandose(false);
  }

  return (
    <li>
      {editandose ? (
        <form>
          <input 
            type="text" 
            value={nuevoTitulo} 
            onChange={(e) => setNuevoTitulo(e.target.value)} 
          />
          <button onClick={handleUpdateClick}>Actualizar</button>
        </form>
      ) : (
        <>
          <span>{titulo}</span>
          <button onClick={handleEditClick}>Editar</button>
        </>
      )}
    </li>
  );
}