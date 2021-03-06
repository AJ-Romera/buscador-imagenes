import React from 'react';
import PropTypes from 'prop-types';

function Imagen({ imagen }) {
    // Extraer las variables
    const {
        previewURL,
        tags,
        user,
        userImageURL,
        views,
        likes,
        largeImageURL,
    } = imagen;

    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
            <div className='card' style={{ height: '35rem' }}>
                <img src={previewURL} alt={tags} className='card-img-top' />

                <div className='card-body'>
                    <p className='card-text'>
                        <b>{user}</b>
                        <img
                            src={userImageURL}
                            alt='Imagen del Autor'
                            className='card-img ml-3'
                            style={{ height: '3rem', width: '3rem' }}
                        />
                    </p>

                    <p className='card-text'>{views} Visualizaciones</p>
                    <p className='card-text'>{likes} Me Gusta</p>
                </div>

                <div className='card-footer'>
                    <a
                        href={largeImageURL}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='.card-link btn btn-info btn-block'
                    >
                        Ver Imagen HD
                    </a>
                </div>
            </div>
        </div>
    );
}

Imagen.propTypes = {
    imagen: PropTypes.object.isRequired,
};

export default Imagen;
