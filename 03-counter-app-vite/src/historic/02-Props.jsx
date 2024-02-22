 // Properties ( props) es un objecto con informacion que viene de paramentros entre el padre y el hijo
 // todo el objeto es props pero se puede des-estructurar en valores con llaves { valor, valor1}


const FirstApp = ( {nombre, mensaje} )=>{
    return( 
    <>
        <h1> { nombre } </h1>
        <p>{ mensaje }</p>
    </>
    
    )
}