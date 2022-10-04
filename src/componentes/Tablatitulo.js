import React from "react";
import "../hojas-estilo/tablatitulo.css"

const Tablatitulo = () =>{
  return(
    <div>
      <table>
        <thead class="titulofila">
          <tr>
            <th colspan="3">Text</th>
          </tr>
        </thead>

        <thead class="subtitulofilas">
          <tr>
            <th>Text</th>
            <th>Text</th>
            <th>Text</th>
          </tr>
        </thead>

        <tr className="contenidotablatitulo">
          <td>cscsccdcdcdc </td>
          <td>opppldcdcdc </td>
          <td>plplpzdcdcd </td>
        </tr>

      </table>
    </div>  


  ) 
}

export default Tablatitulo;