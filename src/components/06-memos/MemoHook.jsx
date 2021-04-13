import React, { useMemo, useState } from 'react';
import useCounter from '../../hooks/useCounter';

import './effects.css';

const MemoHook = () => {

    const { state, increment} = useCounter( 5000 );
    const [show, setShow] = useState(true)

    const procesoPesado = ( iteraciones ) => {
        for(let i = 0; i< iteraciones; i++) {
            console.log('vamoooos...!!')
        }
        return `${ iteraciones} iteraciones realizadas.`;
    };
    // useMemo facilita memorizar el resultado de un proceso pesado 
    // para no volver a realizarlo a no ser que haga falta.
    const memoProcesoPesado = useMemo(() => procesoPesado( state ), [ state ]);

    return (
        <div>
            <h1>MemoHook</h1>
            <hr/>
            <h2>Counter: <small>{ state }</small> </h2>

            <p> { memoProcesoPesado } </p>
            <button 
                className='btn btn-primary'
                onClick={()=> increment(1) }
            > + 1</button>
            <button 
                className='btn btn-outline-primary ms-3'
                onClick={()=> setShow( !show ) }
            > Show/Hide { JSON.stringify( show )}</button>
        </div>
    );
};

export default MemoHook;
