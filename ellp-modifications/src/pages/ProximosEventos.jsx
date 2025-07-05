import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProximosEventos.module.css";

const eventos = [
  {
    id: 1,
    titulo: "Trabalho",
    descricao: "Pessoas trabalhando em equipe, compartilhando ideias e produtividade no ambiente profissional.",
    categoria: "Work",
    data: "12/03/2025",
    imagem: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    titulo: "Feira de Inovação Tecnológica",
    descricao: "Exposição de novas tecnologias, startups e soluções inovadoras para o mercado.",
    categoria: "Tecnologia",
    data: "15/03/2025",
    imagem: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    titulo: "Encontro Gastronômico",
    descricao: "Feira de comidas típicas e internacionais para todos os gostos.",
    categoria: "Culinária",
    data: "20/03/2025",
    imagem: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function ProximosEventos() {
  return (
    <div className={styles.container}>
      <div className={styles.eventosGrid}>
        {eventos.map((evento) => (
          <div key={evento.id} className={styles.eventoCard}>
            <div className={styles.eventoHeader}>
              <img src={evento.imagem} alt={evento.titulo} className={styles.eventoImagem} />
              <div className={styles.eventoInfo}>
                <h3>{evento.titulo}</h3>
                <p>{evento.descricao}</p>
                <div className={styles.eventoMeta}>
                  <span><strong>Categoria:</strong> {evento.categoria}</span>
                  <span><strong>Data:</strong> {evento.data}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/eventos" className={styles.verTodosButton}>
        Ver Todos os Eventos
      </Link>
    </div>
  );
}

