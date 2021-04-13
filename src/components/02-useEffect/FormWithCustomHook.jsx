import React from 'react';
import useForm from '../../hooks/useForm';
import './effects.css';


const FormWithCustomHook = () => {
   
    const [values, handleValuesChange] = useForm({
        name:'',
        email: '',
        password: ''
    });

    const {name, email, password} = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>FormWithCustomHook</h1>
                <hr/>
                <div className='form-group'>
                    <input type="text" name='name' placeholder='Su nombre' autoComplete='off' value={name} onChange={(e)=> handleValuesChange(e)} />
                </div>
                <div className='form-group'>
                    <input type="text" name='email' placeholder='Su email' autoComplete='off' value={email} onChange={(e)=> handleValuesChange(e)} />
                </div>
                <div className='form-group'>
                    <input type="password" name='password' placeholder='Su password' autoComplete='off' value={password} onChange={(e)=> handleValuesChange(e)} />
                </div>

                <button type="submit" className='btn btn-primary'>Enviar</button>
            </form>
            
            
        </>
    )
}

export default FormWithCustomHook
