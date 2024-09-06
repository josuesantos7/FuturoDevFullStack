import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FormProvider  } from './Context/FormContext'
import Formulario from "./components/formulario"
import MostrarDados from './components/MostrarDados'


function App() {

  return (
    <FormProvider>
        <Router>
            <Routes>
              <Route path="/" element={<Formulario />} />
              <Route path="/mostrar-dados" element={<MostrarDados />} />
            </Routes>
        </Router>
      </FormProvider>
  )
}

export default App
