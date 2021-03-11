import React, { useState } from 'react';
import Error from './Error';

function Formulario({ setBusqueda }) {
    const [valorInput, setValorInput] = useState('');
    const [error, setError] = useState(false);

    const buscarImagenes = (e) => {
        e.preventDefault();

        // Validar
        if (valorInput.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        // Enviar el value de la búsqueda al componente principal
        setBusqueda(valorInput);
    };

    return (
        <form onSubmit={buscarImagenes}>
            <div className='row'>
                <div className='form-group col-md-8'>
                    <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Busca una imagen, ejemplo: Gato'
                        onChange={(e) => setValorInput(e.target.value)}
                    />
                </div>
                <div className='form-group col-md-4'>
                    <input
                        type='submit'
                        className='btn btn-lg btn-danger btn-block'
                        value='Buscar'
                    />
                </div>
            </div>

            {error ? (
                <Error mensaje='Rellene la búsqueda correctamente' />
            ) : null}
        </form>
    );
}

export default Formulario;
