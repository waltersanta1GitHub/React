// Eventos  se agregan las funciones necesarias por el evento
// Si se requiere que la funcion calcule dentro del componete se debe dejar dentro. Si no es necesario se deja por fuiera del compoente
import PropTypes from 'prop-types';

let valor = 3;

// Aqui esta la funcion fuera del compoente cuando no es necesario que sea calculado dentro
const handleClick =(e,newvalue)=>{

    console.log(e);
    valor = value + 1;
};

const FirstApp = ( {value} )=>{

// Aqui deberia estar la funcion dentro dle compoente si se necesita un cambio



    return( 
    <>
        <h1> Tarea App </h1>
        <p> { value } </p>
        <button onClick={ (event)=>{  handleClick(event,value)}}>
            { value}
        </button>

    </>
    
    )
}

// value es un number y es requrido
FirstApp.prototypes= {
    value: PropTypes.number.isRequired,

};

// el valor por  defecto es 99

FirstApp.defaultProps ={
    value: 99
};
