import React, { useContext } from 'react';
import { FormContext } from '../Context/FormContext';
import useForm from '../Context/useForm';
import { useNavigate } from 'react-router-dom'

const validate = (values) => {
    let errors = {};

    if (!values.name) {
        errors.name = 'Nome é obrigatório';
    }
    if (!values.email) {
        errors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email inválido';
    }

    return errors;
};

const Formulario = () => {
    const { updateFormData } = useContext(FormContext);
    const { values, errors, handleChange, handleSubmit } = useForm(
        { name: '', email: '' }, // valores iniciais
        validate
    );

    const navigate = useNavigate();

    const onSubmit = () => {
        
        // Armazenar os dados do formulário no contexto
        updateFormData('name', values.name);
        updateFormData('email', values.email);
        alert('Formulário enviado com sucesso!');
        navigate('/mostrar-dados');
    };

    return (
        <form onSubmit={(e) => handleSubmit(e, onSubmit)}>
            <div>
                <label>Nome</label>
                <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                />
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;
