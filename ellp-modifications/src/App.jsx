import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Eventos from "./pages/EventosSection";
import EventosEspecificos from "./pages/Eventos_Especificos";
import Voluntarios from "./pages/VoluntariosSection";
import VoluntariosResumo from "./pages/VoluntariosResumo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/eventos/:id" element={<EventosEspecificos />} />
        <Route path="/voluntarios" element={<Voluntarios />} />
        <Route path="/voluntariosresumo" element={<VoluntariosResumo />} />
      </Routes>
    </Router>
  );
}

export default App;
