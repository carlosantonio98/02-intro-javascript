// Desestruturación
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );


// Destructurando
const { nombre, edad, clave } = persona;

console.log( nombre );
console.log( edad );
console.log( clave );




const { nombre:nombre2, edad:edad2, clave:clave2 } = persona;

console.log( nombre2 );
console.log( edad2 );
console.log( clave2 );




const retornaPersona = ( usuario ) => {

    const { edad, nombre, clave } = usuario;

    console.log( edad, nombre, clave );
}
retornaPersona( persona );



const retornaPersona2 = ({ nombre, edad }) => {
    console.log( nombre, edad );
}
retornaPersona2( persona );



const retornaPersona3 = ({ nombre, edad, rango = 'Capitán' }) => {
    console.log( nombre, edad, rango );
}
retornaPersona3( persona );


/*
const userContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    return {
        nombreClave: clave,
        anios: edad,
    }
}
const { nombreClave, anios } = userContext( persona );

console.log( nombreClave, anios );
*/



/*
const userContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3234,
        }
    }
}
const { nombreClave, anios, latlng:{ lat, lng } } = userContext( persona );

console.log( nombreClave, anios );
console.log( lat, lng );
*/




// Es más comun esto
const userContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3234,
        }
    }
}
const { nombreClave, anios, latlng } = userContext( persona );
const { lat, lng } = latlng;

console.log( nombreClave, anios );
console.log( lat, lng );