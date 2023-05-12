import { useState } from 'react';

const Botones = () => {

    const [contador, setContador] = useState(1)

    function sumar() {
        setContador(contador + 1)
    }
    function restar() {
        setContador(contador - 1)
    }

    return (
        <>
        <button onClick={sumar}>
            +
        </button>
        {contador}
        <button onClick={restar}>
            -
        </button>
        <button onClick={()=>setContador(contador)}>
            Agregar al carrito
        </button>
        </>
    )
}


export default Botones