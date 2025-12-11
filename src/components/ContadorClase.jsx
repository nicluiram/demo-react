import React, { Component } from 'react'

const ContadorClase = () => {
    const [conteo, setConteo] = useState(0);

    const incrementar = () => {
        setConteo(conteo + 1);
    }
    const reducir = () => {
        setConteo(conteo - 1);
    }

    return (
        <div>
            <h2>Contador de Clase</h2>
            <p>Conteo: {conteo}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={reducir}>Reducir</button>
        </div>
    );
}
export default ContadorClase
