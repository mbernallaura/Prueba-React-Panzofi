import { useEffect, useState } from "react";
import { Navbar } from "../../ui/components/Navbar"
import { useCounter } from "../hooks/useCounter";
import { obtenerPaginaNormal } from "../services/obtenerPaginaNormal";
import { fechaHoy } from "../helpers/fechaHoy";

export const NormalPage = () => {
  const usuario = JSON.parse(localStorage.getItem('user'));
  const {increment1,increment2,boton1, boton2} =useCounter();
  const fecha = fechaHoy();
  // const tiempoTranscurrido = Date.now();
  // const hoy = new Date(tiempoTranscurrido);
  // const fecha = hoy.toISOString();
  const [paginaNormal, setPaginaNormal] = useState([])

  const getViewNormal = async () =>{
      try {
          const res = await obtenerPaginaNormal();
          const data = await res.json();
          setPaginaNormal(data.usuarios);
      } catch (error) {
          console.log('No se pudo obtener los usuarios');
      }
  }

  useEffect(() => {
      getViewNormal();
  }, [ ])

  return (
    <div className="pages">
      <Navbar user={ usuario } boton1={ boton1 } boton2={ boton2 } fecha={ fecha }/>
      <div className="normalPage">
        <div>
          <img src="../src/assets/logoPanzofi.png" alt="logo" className="logoNormal"/>
        </div>
        <div>
          <h1 className="card-title"> <b>{ paginaNormal.title }</b> </h1>
          <p className="mt-4"> { paginaNormal.description } </p>
          <div className="mt-10 buttons">
            <button 
              className="btn btn-danger"
              onClick= { increment1 }
            >Boton 1</button>
            <button 
              className="btn btn-dark"
              onClick= { increment2 }
            >Boton 2</button>
          </div>
        </div>
      </div>
    </div>
  )
}
