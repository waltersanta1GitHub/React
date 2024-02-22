 // PropType define valores requeridos y fuertemente tipados simulando TypeScript
 // tamnbien puede definir que valores tiene valores por defecto
import PropTypes from 'prop-types';

const FirstApp = ( {nombre, mensaje} )=>{
    return( 
    <>
        <h1> { nombre } </h1>
        <p>{ mensaje }</p>
    </>
    
    )
}

// El valor nombre es un string y es requrido
FirstApp.prototypes= {
    nombre: PropTypes.string.isRequired,

};

// se asignan los valores por defecto

FirstApp.defaultProps ={
    mensaje: " No hay mensaje"
};