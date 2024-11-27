'use client'
import Image from "next/image";
import styles from "./page.module.css";
import AnimalList from "./Ejercicio1";
import ImageGallery from "./Ejercicio2";
import Library from "./Ejercicio3";

export default function Home() {
  //Imágenes para mostrar en el ejercicio 2
  const imagenes = [
    "https://image-service.onefootball.com/transform?w=128&dpr=2&image=https://images.onefootball.com/icons/teams/164/34.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRXwAQtt7KeRbiP1HSos8eTXLUAPWknKuwg&s",
    "https://cdn.icon-icons.com/icons2/104/PNG/256/spain_2_footballteam_18001.png",
    "https://media.elobservador.com.uy/p/cdc3e2674584223ce415be8d3d4c1ad3/adjuntos/364/imagenes/100/569/0100569792/256x256/smart/imagepng.png",
    "https://media.contentapi.ea.com/content/dam/ea/f1/f1-24/common/driver-ratings/driver-small-portraits/10.png"
  ];

  //Frases para mostrar en el ejercicio 2
  const frases = [
    "La vida es un viaje, no un destino.",
    "El único modo de hacer un gran trabajo es amar lo que haces.",
    "No cuentes los días, haz que los días cuenten.",
    "Santiago Abascal, futuro presidente de ESPAÑA",
    "Fernando Alonso, futuro ganador de la F1"
  ];

  //Libros para mostrar en el ejercicio 3
  const libros = [
    "Manolito Gafotas", 
    "Robinson Crusoe", 
    "Mortadelo y Filemón",
    "Me llamo Greg"
  ];

  return (
    <div>
      <h1>Ejercicio 1</h1>
      <AnimalList></AnimalList>
      <br></br>
      <h1>Ejercicio 2</h1>
      <ImageGallery images={imagenes} frases={frases}/>
      <br></br>
      <h1>Ejercicio 3</h1>
      <Library libros={libros}></Library>
    </div>
  );
}
