import { Navbar } from "../../ui/components/Navbar";
import { PersonsList } from "../components";
import { fechaHoy } from "../helpers/fechaHoy";


export const AdminPage = () => {
  const usuario = JSON.parse(localStorage.getItem('user'));
  const fecha = fechaHoy();
  return (
    <div className="pages2">
      <Navbar user={ usuario } boton1={ null } boton2={ null } fecha={ fecha }/>
      <PersonsList/>
    </div>
  )
}
