import Css from "../estilos.css/lista.css";
import { v4 as uuidv4 } from "uuid";
import { Tarea } from "./tarea";
uuidv4();

export const ListaTareas = ({
  tareas,
  estadoTarea,
  mostrarTarea,
  titulo,
  eliminarTarea,
}) => {
  return (
    <div className="lista-tareas">
      <h2> {titulo}</h2>

      {tareas
        .filter((tarea) => tarea.completado == mostrarTarea)
        .map((tarea) => (
          <Tarea
            tarea={tarea}
            key={tarea.nombre}
            estadoTarea={estadoTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
    </div>
  );
};
