import { dataPanzofi } from "../../appPrincipal/data/dataPanzofi";

export const getUser = ( user, password ) =>{
    return dataPanzofi.find(usuario => (usuario.user === user && usuario.password=== password));
}