import { useState } from 'react';

const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const handleValueChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value 
        });
    };

    return[ values, handleValueChange ];
};

export default useForm;
