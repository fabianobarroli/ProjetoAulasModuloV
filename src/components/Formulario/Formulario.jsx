import React from "react";
import styles from "./Formulario.module.css";
import Maquina from "../../assets/maquina01_large.jpg"

function Formulario() {
  
    return (
      <div>
        <div>
          <img src={Maquina}/>
        </div>

        <div style={containerEstilo}>
          <label htmlFor="nome">Nome Completo</label>
          <input style={inputEstilo} type="text" name="nome" id="nome" />
        </div>
        <div style={containerEstilo}>
          <label htmlFor="email">E-mail</label>
          <input style={inputEstilo} type="text" name="email" id="email" />
        </div>
        <div style={containerEstilo}>
          <label htmlFor="">Telefone</label>
          <input
            style={inputEstilo}
            type="text"
            name="telefone"
            id="telefone"
          />
        </div>
        <div>
          <button>Enviar</button>
        </div>
      </div>
    );
  
}

export default Formulario;
