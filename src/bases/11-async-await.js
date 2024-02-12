// Async await

const getImagen = async () => {

    // Para controlar errores al utilizar el async await es con el try catch
    try {
        
        const apiKey = 'kEotncjZ6vyhTBuTNgOKlxbYeuiLe27i';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);  
        const { data } = await respuesta.json();  
        
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    
        console.log(url);

    } catch ( error ) {
        console.error( error );
    }

}

getImagen();


// La unica condición para trabajar con los await es que deben de estar dentro de la funcion async

// las promesas se deben de esperar para obtener la data, por eso se usa el await

// el await se espera a que la promesa termine para poder pasar a la siguiente linea