import React from 'react';
import Formulario from './components/Formulario';

function App() {
    return (
        <div className='jumbotron'>
            <div className='container'>
                <p className='lead text-center'>Buscador de Imágenes</p>
                <Formulario />
            </div>
        </div>
    );
}

export default App;
