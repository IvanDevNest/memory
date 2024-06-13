import "./Carta.css"
import React from "react"; 
import { useState } from "react";   


function Carta({ color, click, visible }) {
    console.log("visible", visible);

    
    return (
        <div 
            className="carta" 
            onClick={click} 
            style={visible ? { backgroundColor: color } : { backgroundImage: 'url("/images/atras.jpg")' }}
        >
            {visible}
        </div>
    );
}


    
export default Carta;