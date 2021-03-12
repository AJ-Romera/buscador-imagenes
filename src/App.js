import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {
    // States de la app
    const [busqueda, setBusqueda] = useState('');
    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {
        const consultarAPI = async () => {
            if (busqueda === '') {
                return;
            }

            const baseUrl = process.env.REACT_APP_PIXABAY_BASE_API_URL;
            const apiKey = process.env.REACT_APP_PIXABAY_API_KEY;
            const imagenesPorPagina = 30;

            const resultado = await axios.get(
                `${baseUrl}?key=${apiKey}&q=${busqueda}&image_type=photo&per_page=${imagenesPorPagina}`
            );

            setImagenes(resultado.data.hits);
        };
        consultarAPI();
    }, [busqueda]);

    return (
        <div className='container'>
            <div className='jumbotron'>
                <p className='lead text-center'>Buscador de Imágenes</p>
                <Formulario setBusqueda={setBusqueda} />
            </div>
            <div className='row justify-content-center'>
                <ListadoImagenes imagenes={imagenes} />
            </div>
        </div>
    );
}

export default App;
