import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Eventos.module.css';
import { FaArrowRight, FaArrowLeft, FaHome } from "react-icons/fa";

const eventos = [
  {
    id: 1,
    titulo: "Trabalho",
    descricao: "(PESSOAS TRABALHANDO)",
    imagem: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoria: "Work"
  },
  {
    id: 2,
    titulo: "Feira de Inovação Tecnológica",
    descricao: "(EXPOSIÇÃO)",
    imagem: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    categoria: "Tecnologia"
  },
  {
    id: 3,
    titulo: "Encontro Gastronômico",
    descricao: "(FEIRA DE COMIDA)",
    imagem: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    categoria: "Culinária"
  },
  {
    id: 4,
    titulo: "Corrida e Saúde",
    descricao: "(ESPORTE E BEM-ESTAR)",
    imagem: "https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoria: "Esporte"
  },
  {
    id: 5,
    titulo: "Oficina de Arte",
    descricao: "(ATIVIDADE CRIATIVA)",
    imagem: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
    categoria: "Cultura"
  }
];

const Eventos = () => {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const evento = eventos[paginaAtual];
  const totalPaginas = eventos.length;

  return (
    <div className={styles.eventoContainer}>
      {/* Botão Home */}
      <Link to="/" className={styles.homeLink}>
        <FaHome className={styles.homeIcon} />
        <span className={styles.homeText}>Início</span>
      </Link>

      {/* Conteúdo do evento */}
      <img src={evento.imagem} alt={evento.titulo} className={styles.imagem} />
      <h2>{evento.titulo}</h2>
      <p>{evento.descricao}</p>
      <p>{evento.data}12/03/2025</p>
      <p><strong>Categoria:</strong> {evento.categoria}</p>

      <button className={styles.btn}>Saiba mais</button>

      {/* Navegação entre eventos */}
      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
        {paginaAtual > 0 && (
          <FaArrowLeft
            className={styles.pageArrow}
            onClick={() => setPaginaAtual(paginaAtual - 1)}
          />
        )}
        {paginaAtual < totalPaginas - 1 && (
          <FaArrowRight
            className={styles.pageArrow}
            onClick={() => setPaginaAtual(paginaAtual + 1)}
          />
        )}
      </div>
    </div>
  );
};

export default Eventos;
