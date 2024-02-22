

const nombre =  'Alejandro';
const apellido =  'Santamaria';

const nombreCompleto = nombre+ ' '+apellido;

const nombreCompletoVartips = `
${nombre} 
${apellido}
`;

console.log(nombreCompleto);

console.log(nombreCompletoVartips);


function getSaludo( nombre)
{
    return `Hola Mundo ${nombre}`;
}

console.log( ` Este es el texto: ${ getSaludo(" gabriela")}`);