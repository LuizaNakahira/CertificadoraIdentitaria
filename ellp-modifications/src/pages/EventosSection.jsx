import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Eventos.module.css';

export default function EventosSection() {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [eventos, setEventos] = useState([]);
  const navigate = useNavigate();
  const eventosPorPagina = 3;

  useEffect(() => {
    const eventosFixos = [
      {
        id: 1,
        titulo: "Trabalho",
        descricao: "Pessoas trabalhando em equipe, compartilhando ideias e produtividade no ambiente profissional.",
        categoria: "Work",
        data: "12/03/2025",
        local: "São Paulo - SP",
        participantes: 50,
        coffee: true,
        gratuito: true,
        imagem: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 2,
        titulo: "Feira de Inovação Tecnológica",
        descricao: "Exposição de novas tecnologias, startups e soluções inovadoras para o mercado.",
        categoria: "Tecnologia",
        data: "15/03/2025",
        local: "Campinas - SP",
        participantes: 100,
        coffee: false,
        gratuito: false,
        imagem: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 3,
        titulo: "Encontro Gastronômico",
        descricao: "Feira de comidas típicas e internacionais para todos os gostos.",
        categoria: "Culinária",
        data: "20/03/2025",
        local: "Curitiba - PR",
        participantes: 75,
        coffee: false,
        gratuito: true,
        imagem: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 4,
        titulo: "Corrida e Saúde",
        descricao: "Evento esportivo com corrida e atividades de bem-estar.",
        categoria: "Esporte",
        data: "25/03/2025",
        local: "Rio de Janeiro - RJ",
        participantes: 200,
        coffee: false,
        gratuito: true,
        imagem: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 5,
        titulo: "Oficina de Arte",
        descricao: "Atividades artísticas e criativas para todas as idades.",
        categoria: "Cultura",
        data: "30/03/2025",
        local: "Salvador - BA",
        participantes: 30,
        coffee: true,
        gratuito: true,
        imagem: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
    ];

    const eventosSalvos = JSON.parse(localStorage.getItem('eventos')) || [];
    setEventos([...eventosFixos, ...eventosSalvos]);
  }, []);

  const indiceUltimoEvento = paginaAtual * eventosPorPagina;
  const indicePrimeiroEvento = indiceUltimoEvento - eventosPorPagina;
  const eventosAtuais = eventos.slice(indicePrimeiroEvento, indiceUltimoEvento);
  const totalPaginas = Math.ceil(eventos.length / eventosPorPagina);

  const mudarPagina = (numeroPagina) => {
    setPaginaAtual(numeroPagina);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerSection}>
        <Link to="/" className={styles.voltarButton}>
          ← Voltar
        </Link>

        <button
          onClick={() => navigate('/oficinas/nova')}
          className={styles.btn}
        >
          Cadastrar Oficina
        </button>
      </div>

      <div className={styles.eventosGrid}>
        {eventosAtuais.map((evento) => (
          <div key={evento.id} className={styles.eventoCard}>
            <div className={styles.eventoHeader}>
              <img
                src={evento.imagem || 'https://via.placeholder.com/120'}
                alt={evento.titulo || 'Evento'}
                className={styles.eventoImagem}
              />
              <div className={styles.eventoBasicInfo}>
                <h2 className={styles.eventoTitulo}>{evento.titulo}</h2>
                <p className={styles.eventoCategoria}>{evento.categoria}</p>
                <p className={styles.eventoData}>Data: {evento.data}</p>
              </div>
            </div>

            <div className={styles.eventoContent}>
              <div className={styles.eventoSection}>
                <h3>Descrição</h3>
                <p className={styles.eventoDescricao}>{evento.descricao}</p>
              </div>

              <div className={styles.eventoSection}>
                <h3>Informações do Evento</h3>
                <div className={styles.eventoInfo}>
                  <p><strong>Local:</strong> {evento.local}</p>
                  <p><strong>Participantes:</strong> {evento.participantes} pessoas</p>
                  <p><strong>Coffee Break:</strong> {evento.coffee ? 'Sim' : 'Não'}</p>
                  <p><strong>Gratuito:</strong> {evento.gratuito ? 'Sim' : 'Não'}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPaginas > 1 && (
        <div className={styles.paginacao}>
          <button 
            onClick={() => mudarPagina(paginaAtual - 1)}
            disabled={paginaAtual === 1}
            className={`${styles.botaoPaginacao} ${paginaAtual === 1 ? styles.desabilitado : ''}`}
          >
            ← Anterior
          </button>
          
          {[...Array(totalPaginas)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => mudarPagina(index + 1)}
              className={`${styles.botaoPaginacao} ${paginaAtual === index + 1 ? styles.ativo : ''}`}
            >
              {index + 1}
            </button>
          ))}
          
          <button 
            onClick={() => mudarPagina(paginaAtual + 1)}
            disabled={paginaAtual === totalPaginas}
            className={`${styles.botaoPaginacao} ${paginaAtual === totalPaginas ? styles.desabilitado : ''}`}
          >
            Próximo →
          </button>
        </div>
      )}
    </div>
  );
}
