import React from 'react';
import Carta from './Carta';
import './Memory.css';
import { useState, useEffect } from 'react';
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function Memory() {
  

  let [mapa, setMapa] = useState([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]])
  let [filas, setFilas] = useState([])
  let colores = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "black", "white", "brown"];


  function click(i, j) {
    let mapaActual = JSON.parse(JSON.stringify(mapa));
    mapaActual[i][j] = 1;
    console.log("click", mapaActual, i , j);
    setMapa(mapaActual);
  }

  let id = 0;

  useEffect(() => {

    
    let finasIni=[]
    console.log("useffect");

    let count = 0;
    for (let i = 0; i < 5; i++) {
      let fila = [];
      for (let j = 0; j < 4; j++) {
        fila.push(<Carta key={""+i+j} click={() => click(i, j)} visible={mapa[i][j]} color={colores[count]} />);
        count++;
        if (count === colores.length) count = 0;

        id++;
      }
      shuffleArray(fila);

      finasIni.push(fila);
    }
    shuffleArray(finasIni);
    setFilas(finasIni);
  }, [])


  return (
    <>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet" />

      </head>
      <div className='fondo'>
        <header>
          <h1 class="titulo-juego">MEMORY</h1>
        </header>
        <div className="container">
          {filas.map((fila, i) => (
            <div>
              {fila}
            </div>
          ))}
        </div>

      </div>


    </>
  );
}
export default Memory;