// Hacer un compoente que tenga 3 botones 
// el primero de adicionar al contador, el segundo de disminuir el contador y el tercero reset del valor al inicial

import { useState } from "react";


const TareaDos= ({valor})=>{

    const [ contador,setContador] = useState(valor); 

    const handleAdicionar=()=>{

        setContador(() => contador+1);
    };

    const handleRestar=()=>{

        setContador(() => contador-1);
    };

    const handleReset=()=>{

        setContador(valor);
    };



    return ( <>
    <h1>Tarea Dos Contador</h1>
    <p> {contador} </p>
    <button onClick={handleAdicionar}>+1</button>
    <button onClick={handleRestar}>-1</button>
    <button onClick={handleReset}>Reset</button>
    
    </>  );
}

