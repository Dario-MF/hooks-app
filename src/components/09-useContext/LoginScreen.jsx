import React, { useContext, useState } from 'react';
import UserContext from './UserContext';

const LoginScreen = () => {

    const [form, setForm] = useState({name:'', email: ''})
    const { setUser } = useContext(UserContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        setUser(form);
        setForm({name:'', email: ''})
    }

    return (
        <div>
            <h1>Login Screen</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <input 
                    className='form-control mb-2' 
                    type="text" 
                    placeholder='Nombre Usuario' 
                    value={form.name} 
                    onChange={(e)=> setForm({...form, name: e.target.value })}/>
                <input 
                    className='form-control mb-2' 
                    type="email"
                    placeholder='Email Usuario' 
                    value={form.email}
                    onChange={(e)=> setForm({...form, email: e.target.value })}/>

                <button className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default LoginScreen;
