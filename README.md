# App Clima con React

_Web Buscador de Imágenes de libre uso. Dichas imágenes son tomadas de Pixabay mediante su API. Cada imagen encontrada tiene diversa información y un botón que te redirige a la imágen en alta definición, desde ahí podrás descargarla y utilizarla libremente._

## Índice de Contenidos

-   [Demo](#demo-)
-   [Construido Con](#construido-con-%EF%B8%8F)
-   [Instalación](#instalación-)

## Demo 🚀

https://buscador-imagenes-hd.netlify.app/

## Construido con 🛠️

-   [Create React App](https://github.com/facebook/create-react-app). - Usado para crear la base del proyecto con React
-   [API Pixabay](https://pixabay.com/api/docs/) - API de donde tomo los datos de las imágenes (imagen, visualizaciones, me gusta, tags, etc)
-   [Bootswatch](https://bootswatch.com/4/journal/bootstrap.min.css) - Un theme para Bootstrap. Se encarga del aspecto y responsive de la web.
-   React useState Hook - Para el estado de búsqueda, imágenes, paginado, error, renderizado condicional de componentes...
-   React useEffect Hook - Para consultar la API, guardar los datos en un state, validar que no haya error, paginado, scroll, etc
-   Axios - Librería de JavaScript que uso como cliente HTTP para consultar la API y obtener respuestas sencillas
-   JavaScript ES6+ - Últimos estándares de JavaScript
-   Carga condicional de componentes
-   Paginación Sencilla
-   PropTypes - Verificación de los tipos de las props.

### Instalación 🔧

_Clona o haz fork del repositorio. Abre el proyecto en tu consola y escribe el comando:_

```
npm install
```

_Te instalará las dependencias del proyecto, luego usa el comando:_

```
npm start
```

_Iniciará el proyecto en modo desarrollador en tu navegador. Se abrirá automáticamente:_

[http://localhost:3000](http://localhost:3000)

_La página se recargará si haces y guardas cambios en el código. También verás errores en la consola (si los hubiese)_
