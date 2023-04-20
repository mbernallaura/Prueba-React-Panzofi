import React, { useState } from 'react'

export const useCounter = () => {
    const [boton1, setBoton1] = useState(0);
    const [boton2, setBoton2] = useState(0);

    const increment1 = () =>{
        setBoton1( boton1 + 1 );
    }

    const increment2 = () =>{
        setBoton2( boton2 + 1 );
    }

    const reset = () =>{
        setBoton1(0);
        setBoton2(0);
    }

    return {
        increment1,
        increment2,
        boton1,
        boton2,
        reset
    }
}
