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
let colores = ["011", "011", "002", "002", "003", "003", "004", "004", "005", "005", "006", "006", "007", "007", "008", "008", "009", "009", "010", "010",];
shuffleArray(colores)
colores = colores.map(e => ({ color: e, visible: 0 }))
console.log("colores", colores);

function Memory() {

    let [cartaAnterior, setCartaAnterior] = useState(null)
    let [mapa, setMapa] = useState(colores)

    const todasCartasVisibles = (mapa) => {
        let guanyat = 0
        if (mapa.every(carta => carta.visible == 2)) {
            guanyat = true
            return guanyat
        }
        else {
            return guanyat
        }
    };
    function click(i) {
        if (mapa[i].visible === 2) {
            return;
        }
        if (cartaAnterior && cartaAnterior.id === i) {
            return;
        }

        let mapaActual = [...mapa]; // Create a shallow copy of the state array

        mapaActual[i].visible = mapaActual[i].visible ? 0 : 1;

        setMapa(mapaActual);

        if (cartaAnterior) {
            if (cartaAnterior.color === mapaActual[i].color) {
                mapaActual[cartaAnterior.id].visible = 2;
                mapaActual[i].visible = 2;
                setMapa(mapaActual);
                setCartaAnterior(null);
            } else {
                // Use functional update to ensure we capture the correct state
                setTimeout(() => {
                    setMapa(prevMapa => {
                        let mapaActualTimeout = [...prevMapa]; // Create a new copy from the previous state
                        mapaActualTimeout[cartaAnterior.id].visible = 0;
                        mapaActualTimeout[i].visible = 0;
                        return mapaActualTimeout;
                    });
                }, 500);
            }
            setCartaAnterior(null);
        } else {
            setCartaAnterior({ id: i, color: mapaActual[i].color });
        }
    }

    let id = 0;
    let cartas = mapa.map((e, index) => (<Carta id={index} key={index} click={() => click(index)} visible={e.visible} color={e.color} />));
    let victoria = todasCartasVisibles(mapa)



    return (
        <div className='container'>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet" />

            </head>
            <header>
                <div className='titulo'>
                    <h1 class="titulo-juego">MEMORY</h1>

                </div>
            </header>
            {victoria ? (
                <>
                <h2 className="victoria">Has ganado</h2>
                <br />
                <button className="boton-victoria btn" onClick={e => {
                    window.location.reload();
                }}>Volver a jugar</button>

                </>
                
            ) : (
                <div className="container">
                    {cartas}
                </div>
            )}

        </div>
                



        );
}
export default Memory;