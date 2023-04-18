import { Navbar } from "../../ui/components/Navbar"


export const NormalPage = () => {
  const usuario = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="pages">
      <Navbar user={ usuario }/>
      <div className="normalPage">
        <div>
          <img src="../src/assets/logoPanzofi.png" alt="logo" className="logoNormal"/>
        </div>
        <div>
          <h1 className="card-title"> <b>Panzofi</b> </h1>
          <p className="mt-4">
            Usted como usuario podra oprimir cualquiera de los botones a su elección, recuerde que esto es para
            hacer un estudio y tomar datos de cuantas veces puede oprimimr uno u otro. 
          </p>
          <div className="mt-10 buttons">
            <button className="btn btn-danger">Boton 1</button>
            <button className="btn btn-dark">Boton 2</button>
          </div>
        </div>
      </div>
    </div>
  )
}
