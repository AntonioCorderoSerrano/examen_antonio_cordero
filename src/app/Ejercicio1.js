import React, { useState } from "react";

export default function AnimalList() {
  const [animales, setAnimales] = useState([]); // Lista de animales que se irán añadiendo
  const [form, setForm] = useState({ name: "", especie: "", age: "", sexo: "Macho" }); // Campos del formulario

  function handleAddAnimal()  {
    // Validar que el nombre y la especie no estén vacíos
    if (!form.name || !form.especie) {
      alert("Por favor, completa los campos de nombre y especie.");
      return;
    }

    setAnimales([...animales, form]);
    setForm({ name: "", especie: "", age: "", sexo: "Macho" }); // Dejar el formulario en blanco una vez se ha añadido el nuevo animal
  };

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); handleAddAnimal(); }}>
        <input
        type="text"
          placeholder="Nombre"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <br />
        <input
        type="text"
          placeholder="Especie"
          value={form.especie}
          onChange={(e) => setForm({ ...form, especie: e.target.value })}
        />
        <br />
        <input
        type="number"
          placeholder="Edad"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />
        <br />
        <select
          value={form.sexo}
          onChange={(e) => setForm({ ...form, sexo: e.target.value })}
        >
          <option value="Macho">Macho</option>
          <option value="Hembra">Hembra</option>
        </select>
        <br />
        <button type="submit">Agregar animal</button>
      </form>
      <br />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Especie</th>
            <th>Edad</th>
            <th>Sexo</th>
          </tr>
        </thead>
        <tbody>
          {animales.map((animal, index) => (
            <tr key={index}>
              <td>{animal.name}</td>
              <td>{animal.especie}</td>
              <td>{animal.age}</td>
              <td>{animal.sexo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}