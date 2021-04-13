import React, { useEffect, useState } from 'react'
import Message from './Message';

const SimpleForm = () => {
    const [form, setForm] = useState({
        name:'',
        email: ''
    });
    const {name, email} = form;
    useEffect(()=> {
        //console.log('form cambio')
    }, [form]);
    useEffect(()=> {
        //console.log('email cambio')
    }, [email]);

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value 
        });
    };

    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className='form-group'>
                <input type="text" name='name' placeholder='Su nombre' autoComplete='off' value={name} onChange={(e)=> handleInputChange(e)} />
            </div>
            <div className='form-group'>
                <input type="text" name='email' placeholder='Su email' autoComplete='off' value={email} onChange={(e)=> handleInputChange(e)} />
            </div>
            { (name === '123') && <Message />}
        </>
    )
}

export default SimpleForm
