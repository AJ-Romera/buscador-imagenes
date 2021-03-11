import React, { useEffect, useState } from 'react';
import Formulario from './components/Formulario';

function App() {
    // States de la app
    const [busqueda, setBusqueda] = useState('');

    useEffect(() => {
        if (busqueda === '') {
            return;
        }

        const imagenesPorPagina = 30;
    }, [busqueda]);

    return (
        <div className='jumbotron'>
            <div className='container'>
                <p className='lead text-center'>Buscador de Imágenes</p>
                <Formulario setBusqueda={setBusqueda} />
            </div>
        </div>
    );
}

export default App;
