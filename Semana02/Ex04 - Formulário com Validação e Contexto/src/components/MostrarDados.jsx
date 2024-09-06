import React, { useContext } from 'react';
import { FormContext } from '../Context/FormContext';

const MostrarDados = () => {
    const { formData } = useContext(FormContext);

    return (
        <div>
            <h2>Dados do Formulário:</h2>
            <p>Nome: {formData.name || 'Não informado'}</p>
            <p>Email: {formData.email || 'Não informado'}</p>
        </div>
    );
};

export default MostrarDados;
