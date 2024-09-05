import React, { createContext, useState } from 'react';

// Cria o contexto com o valor padrão de 'claro'
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [tema, setTema] = useState('claro');

    // Alterna o tema entre claro e escuro
    const alternarTema = () => {
        setTema(prevTema => (prevTema === 'claro' ? 'escuro' : 'claro'));
    };

    return (
        <ThemeContext.Provider value={{ tema, alternarTema }}>
            {children}
        </ThemeContext.Provider>
    );
};
