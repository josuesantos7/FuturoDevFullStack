import React, { createContext, useState } from 'react';

// Criar o contexto
export const FormContext = createContext();

// Criar o provider do contexto
export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({});

    const updateFormData = (name, value) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <FormContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormContext.Provider>
    );
};
