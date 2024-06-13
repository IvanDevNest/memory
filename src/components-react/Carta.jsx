import "./Carta.css"
import React from "react";
import { useState } from "react";


function Carta({ color, click, visible }) {
    console.log("visible", visible);


    return (
            
            <div className={`card carta ${visible ? "flipped" :""}`} id="card" onClick={click}>
                <div className="card-inner carta">
                    <div className={"card-front carta "} style={{ backgroundImage: 'url("/images/atras.jpg")' }}>
                        
                    </div>
                    <div className={`card-back carta`} style={{backgroundImage: `url("/images/${color}.png")`}}>
                        
                    </div>
                </div>
            </div>




    );
}



export default Carta;