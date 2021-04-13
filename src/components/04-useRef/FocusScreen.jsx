import React, { useRef } from 'react';
import './effects.css';

const FocusScreen = () => {
    const inputRef = useRef();


    const handleClick = () => {
        //document.querySelector('input').select();
        inputRef.current.select();
    }
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>
            <input 
                ref={inputRef}
                type="text"
                className='form-control'
                placeholder='Su Nombre'
            />
            <button 
                className='btn btn-outline-primary mt-5'
                onClick={handleClick}
            >Focus</button>
        </div>
    );
};

export default FocusScreen;
