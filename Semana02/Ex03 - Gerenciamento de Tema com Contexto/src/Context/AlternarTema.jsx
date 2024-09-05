import React, { useContext, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

const AlternarTema = () => {
    const { tema, alternarTema } = useContext(ThemeContext);

    useEffect(() => {
        document.body.className = ''; // Limpa qualquer classe anterior
        document.body.classList.add(tema); // Aplica a classe do tema
    }, [tema]);

    return (
        <div>
            <button onClick={alternarTema}>Alternar Tema</button>
        </div>
    );
};

export default AlternarTema;
