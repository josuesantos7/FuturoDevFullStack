import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import "./Formulario.css"

function Formulario(){

    const { register, handleSubmit, formState:{ errors}, reset } = useForm();

    const [mensagem, setMessagem] = useState('');

    const onSubmit = (data) => {
        console.log(data)
        reset()

        if (!data.password || !data.nome || !data.email) {
            alert("Preencha todos os campos!!")
            return
        }

        setMessagem('Usuário cadastrado com sucesso!');
    }

    return (
        <>
            <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Nome" {...register('nome')}></input>

                <input type="email" placeholder="Email" {...register('email')}></input>

                <input type="password" placeholder="Senha" {...register('password')}></input>

                <button type="submit">Cadastrar</button>
            </form>
            
            {mensagem && <span>{mensagem}</span>}
        </>
    )
}

export default Formulario