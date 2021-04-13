import React from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './effects.css';

const MultipleCustomHooks = () => {
    const {state, increment, decrement } = useCounter(1);

    const baseUrl = `https://www.breakingbadapi.com/api/quotes/${state}`;
    const {loading, data} = useFetch(baseUrl)
    const {author, quote } = !!data && data[0]
    

    return (
        <div>
            <h1 className="text-center">BreackingBad Quotes</h1>
            <hr/>
            {
            (loading)      
                ?  (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                :   (
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>{ quote }</p> 
                            </blockquote>
                            <figcaption className="blockquote-footer">
                            <cite>{ author }</cite> 
                            </figcaption>
                            <button className='btn btn-primary ms-4' onClick={() => (state === 1) ? null : decrement(1) }>{'<'}</button>
                            <button className='btn btn-primary ms-4' onClick={() => increment(1)}>{'>'}</button>
                        </figure>
                    )
            }
        </div>
    )
}

export default MultipleCustomHooks
