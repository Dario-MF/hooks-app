import { useState } from 'react';

const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    };
    const handleValueChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value 
        });
    };

    return[ values, handleValueChange, reset ];
};

export default useForm;
