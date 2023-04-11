import React from "react";
import Css from "../estilos.css/tarea.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faTrash } from "@fortawesome/free-solid-svg-icons";
export const Tarea = ({ tarea, estadoTarea, eliminarTarea }) => {
  return (
    <div className="tarea">
      <div className="tarea-texto">{tarea.nombre}</div>

      <div className="iconos">
        <input
          type="checkbox"
          checked={tarea.completado}
          onClick={() => estadoTarea(tarea)}
        />
        <FontAwesomeIcon
          className="icono"
          icon={faTrash}
          onClick={() => eliminarTarea(tarea)}
        />
      </div>
    </div>
  );
};
