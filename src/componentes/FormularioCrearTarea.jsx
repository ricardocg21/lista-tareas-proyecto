import Css from "../estilos.css/formulario.css";
import { useState } from "react";
export const CrearTarea = ({ guardarTarea }) => {
  const [texto, settexto] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();
    settexto(texto);
    guardarTarea(texto);
    settexto("");
  };

  return (
    <form className="formularioTarea" onSubmit={manejarSubmit}>
      <input
        className="input-texto"
        value={texto}
        onChange={(e) => settexto(e.target.value)}
        type="text"
        placeholder="Digite su tarea"
      />
      <button type="submitt" className="formulario-boton">
        Agregar Tarea
      </button>
    </form>
  );
};
