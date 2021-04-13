import React, { useLayoutEffect, useRef } from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './effects.css';

const LayoutEffect = () => {
    const {state, increment, decrement } = useCounter(1);

    const baseUrl = `https://www.breakingbadapi.com/api/quotes/${state}`;
    const {data} = useFetch(baseUrl)
    const {quote } = !!data && data[0];
    const pTag = useRef();

    useLayoutEffect(() => {
        // Este hook se ejecuta despues de que el componente se renderice, sirve para leer el DOM.
        console.log(pTag.current.getBoundingClientRect());
    }, [quote]);
    
    return (
        <div>
            <h1 className="text-center">Layout Effect</h1>
            <hr/>   
            <figure className="text-center">
                <blockquote className="blockquote">
                    <p ref= {pTag}>{ quote }</p> 
                </blockquote>
                <button className='btn btn-primary ms-4' onClick={() => (state === 1) ? null : decrement(1) }>{'<'}</button>
                <button className='btn btn-primary ms-4' onClick={() => increment(1)}>{'>'}</button>
            </figure>                            
        </div>
    );
};

export default LayoutEffect;
