import React, { useEffect, useState } from 'react';
import './effects.css';

const Message = () => {
    const [cords, setCords] = useState({x:0, y:0})
    useEffect(() => {
        console.log('componente montado');
        const mouseMove = (e) => {
            setCords({x:e.x, y:e.y})
            //console.log({x:e.x, y:e.y})
        }
        window.addEventListener('mousemove', mouseMove)
        return () => {
            console.log('componente desmontado');
            window.removeEventListener('mousemove', mouseMove)

        }
    }, [])
    return (
        <div>
            <h3>Mensaje</h3>
            <p> X: {cords.x}, Y: {cords.y}</p>
        </div>
    )
}

export default Message
