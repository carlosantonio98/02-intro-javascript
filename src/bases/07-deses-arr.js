// Desestructuración de arreglo

const persona = ['Goku', 'Vegeta', 'Trunks'];
console.log(persona);

const [p1, , p3] = persona;
console.log(p1, p3);

const retornaArreglo = () => {
    return ['ABC', 123];
};
console.log(retornaArreglo());

const [letra, numero] = retornaArreglo();
console.log(letra, numero);


// Tarea
// 1. El primer valor del array se llamará nombre
// 2. El segundo se llamará setNombre
const useStateTest = ( valor ) => {
    return [ valor, () => { console.log( 'Hola mundo' ) } ];
};

const arr = useStateTest( 'Goku' );
console.log( arr );


// Solución
const useStateTest2 = ( valor ) => {
    return [ valor, () => { console.log( 'Hola mundo' ) } ];
};

const [ nombre, setNombre ] = useStateTest2( 'Goku' );
console.log( nombre );
setNombre();