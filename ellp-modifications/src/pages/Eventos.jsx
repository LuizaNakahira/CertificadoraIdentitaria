import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Eventos.module.css';

const eventos = [
  {
    id: 1,
    titulo: "Vistiq - Spa Wellness",
    descricao: "(PALESTRAS)",
    imagem: "/imagens/spa.png",
    categoria: "Web Design"
  },
  {
    id: 2,
    titulo: "Avenzor - Portfolio",
    descricao: "(PALESTRAS)",
    imagem: "/imagens/portfolio.png",
    categoria: "Web Design"
  },
  // Adicione mais eventos aqui
];

function Eventos() {
  const [paginaAtual, setPaginaAtual] = useState(0);

  const eventosPorPagina = 1;
  const totalPaginas = Math.ceil(eventos.length / eventosPorPagina);
  const eventoAtual = eventos[paginaAtual];

  const handleScroll = (e) => {
    if (e.deltaY > 0 && paginaAtual < totalPaginas - 1) {
      setPaginaAtual(p => p + 1);
    } else if (e.deltaY < 0 && paginaAtual > 0) {
      setPaginaAtual(p => p - 1);
    }
  };

  const mudarPagina = (index) => {
    setPaginaAtual(index);
  };

  return (
    <div className={styles.page} onWheel={handleScroll}>
      <div className={styles.header}>
        <Link to="/" className={styles.homeLink}>
          <span className={styles.homeText}>HOME</span>
          <span className={styles.homeIcon}>🏠</span>
        </Link>
      </div>

      <div className={styles.eventoContainer}>
        <p className={styles.descricao}>{eventoAtual.descricao}</p>
        <h1 className={styles.titulo}>{eventoAtual.titulo}</h1>
        <div className={styles.info}>
          <span>Category:</span>
          <span>{eventoAtual.categoria}</span>
        </div>
        <img className={styles.imagem} src={eventoAtual.imagem} alt={eventoAtual.titulo} />
        <Link to={`/Eventos_Especificos/${eventoAtual.id}`}>
          <button className={styles.btn}>Saber Mais</button>
        </Link>
      </div>

      <div className={styles.pagination}>
        {[...Array(totalPaginas)].map((_, i) => (
          <span
            key={i}
            onClick={() => mudarPagina(i)}
            className={`${styles.pageNumber} ${paginaAtual === i ? styles.active : ''}`}
          >
            {i + 1}
          </span>
        ))}
        {paginaAtual < totalPaginas - 1 && (
          <span className={styles.pageArrow} onClick={() => setPaginaAtual(paginaAtual + 1)}>{'>'}</span>
        )}
      </div>
    </div>
  );
}

export default Eventos;
