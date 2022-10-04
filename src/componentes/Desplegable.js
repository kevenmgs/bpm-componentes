import React from "react";
import "../hojas-estilo/desplegable.css"

const Desplegable =() =>{
  return(
    <div>
      <form className="desplegableop">
        <select>
          <option >Opcion 1</option>
          <option >Opcion 2</option>
          <option >Opcion 3</option>
        </select>
      </form>
    </div>
  )
}

export default Desplegable;