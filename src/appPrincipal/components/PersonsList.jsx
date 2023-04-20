import DataTable from "react-data-table-component";
import { obtenerUsuarios } from "../services/obtenerUsuarios";
import { useEffect, useState } from "react";


export const PersonsList = () => {
    const [personas, setPersonas] = useState([])

    const getPersons = async () =>{
        try {
            const res = await obtenerUsuarios();
            const data = await res.json();
            setPersonas(data.usuarios);
        } catch (error) {
            console.log('No se pudo obtener los usuarios');
        }
    }

    useEffect(() => {
        getPersons();
    }, [ ])

    const columnas = [
        {
            name: 'Nombre',
            selector: (row) => row.user,
            sortable: true
        },
        {
            name: 'Inicio de sesión',
            selector: (row) => row.date_session,
            sortable: true
        },
        {
            name: 'Tiempo',
            selector: (row) => row.time_session,
            sortable: true
        },
        {
            name: 'Botón 1',
            selector: (row) => row.button1,
            sortable: true
        },
        {
            name: 'Botón 2',
            selector: (row) => row.button2,
            sortable: true
        },
    ]
    
    const paginacion= {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos'
    }
    return (
        <div className="adminPage">
            <DataTable
                title= 'Registros:'
                columns={columnas}
                data={ personas }
                pagination
                paginationComponentOptions={ paginacion }
                fixedHeader
                fixedHeaderScrollHeight="600px"
            />
        </div>
    )
}