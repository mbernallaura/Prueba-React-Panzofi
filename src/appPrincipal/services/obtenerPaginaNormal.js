const getPageNormal = 'http://127.0.0.1:8000/api/view/';

export const obtenerPaginaNormal = async () => {
    return await fetch(getPageNormal);
}


