import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {
    // States de la app
    const [busqueda, setBusqueda] = useState('');
    const [imagenes, setImagenes] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(1);

    useEffect(() => {
        const consultarAPI = async () => {
            if (busqueda === '') {
                return;
            }

            const baseUrl = process.env.REACT_APP_PIXABAY_BASE_API_URL;
            const apiKey = process.env.REACT_APP_PIXABAY_API_KEY;
            const imagenesPorPagina = 30;

            const resultado = await axios.get(
                `${baseUrl}?key=${apiKey}&q=${busqueda}&image_type=photo&per_page=${imagenesPorPagina}&page=${paginaActual}`
            );

            setImagenes(resultado.data.hits);

            // Calcular el total de paginas
            const calcularTotalPaginas = Math.ceil(
                resultado.data.totalHits / imagenesPorPagina
            );
            setTotalPaginas(calcularTotalPaginas);

            // Volver al inicio de la página
            const jumbo = document.querySelector('.jumbotron');
            jumbo.scrollIntoView({ behavior: 'smooth' });
        };
        consultarAPI();
    }, [busqueda, paginaActual]);

    // Definir la página anterior
    const paginaAnterior = () => {
        const nuevaPaginaActual = paginaActual - 1;

        if (nuevaPaginaActual === 0) {
            return;
        }

        setPaginaActual(nuevaPaginaActual);
    };

    // Definir la página siguiente
    const paginaSiguiente = () => {
        const nuevaPaginaActual = paginaActual + 1;

        if (nuevaPaginaActual > totalPaginas) {
            return;
        }

        setPaginaActual(nuevaPaginaActual);
    };

    return (
        <div className='container'>
            <div className='jumbotron'>
                <p className='lead text-center'>Buscador de Imágenes</p>
                <Formulario setBusqueda={setBusqueda} />
            </div>
            <div className='row justify-content-center'>
                <ListadoImagenes imagenes={imagenes} />

                {paginaActual === 1 ? null : (
                    <button
                        type='button'
                        className='btn btn-info mr-1'
                        onClick={paginaAnterior}
                    >
                        &laquo; Anterior
                    </button>
                )}

                {paginaActual === totalPaginas ? null : (
                    <button
                        type='button'
                        className='btn btn-info'
                        onClick={paginaSiguiente}
                    >
                        Siguiente &raquo;
                    </button>
                )}
            </div>
        </div>
    );
}

export default App;
