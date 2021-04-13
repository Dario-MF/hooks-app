import React, { useCallback, useState, useEffect } from 'react';
import './effects.css';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // si pasamos una funcion por props aunque el hijo tenga React.memo se renderiza
    // porque la funcion memorizada se crea denuevo apuntando a otro punto en la memoria.
    /* const increment = () => {
        setCounter( counter + 1);
    }; */


    // useCallback: conjuntamente a react.memo evita el renderizado de los
    // componentes hijos cuando se pasa una funcion como props.
    // con useCallback difinimos que se cree solo cuando setCounter se modifique y
    // con react.memo memorizamos la funcion evitando renderizado del hijo.
    const increment = useCallback(( factor = 1 ) => {
        setCounter( c => c + factor);
    }, [ setCounter ]);


    // Otro caso de uso de useCallback es cuando usamos useEffect, al generarse denuevo la funcion
    // useEffect detecta que cambio y dispararia denuevo el efecto.
    // Pasamos el useCallback como dependencia, de esta manera el useEffect no actua a no ser que la 
    // funcion se renderice, cosa que useCallback evita.
    useEffect(()=> {
        //???
    }, [increment])// useCallback


    return (
        <div>
            <h1>Use callback</h1>
            <hr/>
            <p>counter: { counter }</p>

            <ShowIncrement increment={increment}/>

        </div>
    );
};

export default CallbackHook;
