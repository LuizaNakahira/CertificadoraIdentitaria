import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Eventos from './pages/Eventos';
import EventosEspecificos from './pages/Eventos_Especificos';
import Voluntarios from './pages/Voluntaios';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Eventos" element={<Eventos />} />
        <Route path="/eventos/:id" element={<EventosEspecificos />} />
        <Route path="/Voluntarios" element={<Voluntarios />} />
      </Routes>
    </Router>
  );
}

export default App;
