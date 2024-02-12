// Fetch
const apiKey = 'kEotncjZ6vyhTBuTNgOKlxbYeuiLe27i';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

/*
peticion.then( respuesta => {
    respuesta.json().then( data => {
        console.log(data);
    });
}).
catch( console.warn );
*/


// codigo más limpio, ESTO SE CONOCE COMO PROMESAS EN CADENA
peticion
    .then( respuesta => respuesta.json() )
    .then( ({ data }) => { 
        
        const { url } = data.images.original;

        const img = document.createElement( 'img' );
        img.src = url;

        document.body.append( img );

    })
    .catch( console.warn );