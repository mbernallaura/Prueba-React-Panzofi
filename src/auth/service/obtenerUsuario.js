

export const obtenerUsuario = async (user, password) => {
    const urlUsuario = `http://127.0.0.1:8000/api/user/${ user },${ password }`;
    const respuesta = await fetch(urlUsuario);
    const data = await respuesta.json();
    console.log('data' + data);
    return data.usuarios;
}
