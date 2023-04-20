const getUsersUrl = 'http://127.0.0.1:8000/api/user/';

export const obtenerUsuarios = async () => {
    return await fetch(getUsersUrl);
}
