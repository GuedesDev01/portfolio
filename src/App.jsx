import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import TelaPrincipal from './pages/TelaPrincipal'
import 'aos/dist/aos.css';

function App() {
  const [count, setCount] = useState(0)

   return (
    <Routes>
      <Route path="/" element={<TelaPrincipal />} />
      {/* Adicione outras rotas aqui */}
    </Routes>
  )
}

export default App