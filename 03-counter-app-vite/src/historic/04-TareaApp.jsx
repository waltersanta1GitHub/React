// Tarea App
import PropTypes from 'prop-types';

export const TareaApp = ( {value} )=>{
    return( 
    <>
        <h1> Tarea App </h1>
        <p>{ value }</p>
    </>
    
    )
}

// value es un number y es requrido
TareaApp.prototypes= {
    value: PropTypes.number.isRequired,

};

// el valor por  defecto es 99

TareaApp.defaultProps ={
    value: 99
};