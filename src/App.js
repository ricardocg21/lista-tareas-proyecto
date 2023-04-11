import { useState } from "react";
import "./App.css";
import { CrearTarea } from "./componentes/FormularioCrearTarea";
import { ListaTareas } from "./componentes/lista-Tareas";

function App() {
  const [tareas, settareas] = useState([]);

  function guardarTarea(texto) {
    if (texto == "") {
      settareas(tareas);
    } else {
      settareas([...tareas, { nombre: texto, completado: false }]);
      console.log(tareas);
    }
  }

  function estadoTarea(tarea) {
    settareas(
      tareas.map((t) =>
        t.nombre == tarea.nombre ? { ...t, completado: !t.completado } : t
      )
    );
  }

  function eliminarTarea(tarea) {
    settareas(tareas.filter((t) => t.nombre != tarea.nombre));
    console.log(tareas);
  }

  return (
    <div className="contenedor-app">
      <CrearTarea guardarTarea={guardarTarea} />

      <ListaTareas
        tareas={tareas}
        titulo="Tareas Pendientes"
        estadoTarea={estadoTarea}
        mostrarTarea={false}
        eliminarTarea={eliminarTarea}
      />
      <ListaTareas
        tareas={tareas}
        titulo="Tareas Completadas"
        estadoTarea={estadoTarea}
        mostrarTarea={true}
        eliminarTarea={eliminarTarea}
      />
    </div>
  );
}

export default App;
