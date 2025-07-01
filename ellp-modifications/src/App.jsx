import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Eventos from './pages/Eventos';
import EventosEspecificos from './pages/Eventos_Especificos';
import CadastroOficina from './pages/CadastroOficina'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Eventos" element={<Eventos />} />
        <Route path="/Eventos_Especificos" element={<EventosEspecificos />} />
        <Route path="/oficinas/nova" element={<CadastroOficina />} />
      </Routes>
    </Router>
  );
}

export default App;
