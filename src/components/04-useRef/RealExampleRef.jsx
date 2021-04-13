import React, { useState } from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';
import './effects.css';

const RealExampleRef = () => {

    const [showQuote, setShowQuote] = useState(false)
    return (
        <div>
            <h1>Real example Ref</h1>
            <hr/>

            { showQuote && <MultipleCustomHooks /> }

            <button
                className='btn btn-primary mt-5'
                onClick={ ()=> {
                    setShowQuote( !showQuote )
                }}
            >Mostrar</button>
        </div>
    );
};

export default RealExampleRef;
