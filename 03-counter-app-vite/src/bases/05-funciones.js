

// Funciones JS
const saludar = function(nombre){

    return `Hola, ${nombre}`;
}

console.log(saludar('jose') );

// Funcion de flecha
const saludarFlecha = (nombre) => {
    return `Hola, ${nombre}`;
}

console.log(saludarFlecha('Alejandro'));


// Funcion flecha version dos

const saludarFlechaDos = (nombre) => `Hola, ${nombre}`;

console.log( saludarFlechaDos('Gabriela'));


const getUSER = () => {

    return{
        uid:'ABCDEF',
        username:'Jacobo1234'
    };

};


const empleado = (nombre) => ( { uid:'ABC567',username:nombre});
console.log(empleado('Marinita Garcia'));