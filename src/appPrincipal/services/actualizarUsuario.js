

export const actualizarUsuario = async (id, date_session, button1, button2) => {
    const updateUserUrl = `http://127.0.0.1:8000/api/user/${ id }`;
    const respuesta = await fetch(updateUserUrl,{
        method: 'PATCH',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify({
            "date_session": date_session,
            "button1": button1,
            "button2": button2
        })
    });
    
    const data = await respuesta.json();
    return data;
}
