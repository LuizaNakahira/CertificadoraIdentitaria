import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Eventos from './pages/Eventos';
import EventosEspecificos from './pages/Eventos_Especificos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Eventos" element={<Eventos />} />
        <Route path="/Eventos_Especificos" element={<EventosEspecificos />} />
      </Routes>
    </Router>
  );
}

export default App;
