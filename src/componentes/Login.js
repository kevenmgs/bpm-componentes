import React from "react";
import "..//hojas-estilo//login.css";

const Login = ()=>{
  return(
    <div>
      <div className="contenedorlogos">
        <img className="logobhtrade" src="./img/bhtrade.png" alt="Logo bhtrade"></img>
        <img className="logopromodreams" src="./img/promodreams.png" alt="Logo promodreams"></img>
        <img className="logotrademarket" src="./img/trademarket.png" alt="Logo trademarket"></img>
        <img className="logopromolife" src="./img/promolife.png" alt="Logo promolife"></img>
      </div>
      
      <div class="contenedorlogin"  >
        <form>
          <img className="logobpms" src="./img/logobpms.png" alt="Logo bpms"></img>
          <label className="textcorreo">Correo</label><br></br>
          <input className="cajacorreo" type="Text" placeholder={"Correo@mail.com"} /><br></br>

          <label className="textcontra">Contraseña</label><br></br>
          <input className="cajacontraseña" type="password" placeholder={"*******"}/><br></br>
          <button className="btninicosesion">INICIAR SESIÓN</button>
        </form>
      </div>
    </div>
  );
}

export default Login;