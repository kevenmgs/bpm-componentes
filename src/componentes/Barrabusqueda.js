import React from "react";
import "../hojas-estilo/barrabusqueda.css";

const Barrabusqueda = () =>{
 
  return(
    <div>
      <form className="contenbusqueda">
        <input className="busqueda" type="text" placeholder="Text"></input> 
        <button className="btnbusqueda"><img src="./img/search.png"/></button>
      </form>
    </div>
  )
}

export default Barrabusqueda ; 