import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Voluntarios.module.css';

const voluntarios = [
  {
    id: 1,
    nome: "Ana Silva",
    funcao: "Marketing",
    foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "ana.silva@ellp.org",
    telefone: "(11) 99999-1234",
    experiencia: "5 anos",
    bio: "Especialista em marketing digital e estratégias de comunicação. Trabalha com campanhas de conscientização e engajamento social.",
    historia: "Ana encontrou o projeto buscando maneiras de aplicar sua expertise em psicologia para ajudar na educação.",
    detalhesFuncao: "No marketing, Ana cria campanhas que conectam o projeto com a comunidade e apoiadores.",
    habilidades: ["Marketing Digital", "Redes Sociais", "Design Gráfico", "Comunicação"]
  },
  {
    id: 2,
    nome: "Carlos Souza",
    funcao: "Ensino",
    foto: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "carlos.souza@ellp.org",
    telefone: "(11) 99999-5678",
    experiencia: "8 anos",
    bio: "Professor dedicado com experiência em educação inclusiva e desenvolvimento de metodologias inovadoras de ensino.",
    historia: "Carlos se juntou ao projeto para promover práticas inclusivas na educação.",
    detalhesFuncao: "Ele lidera as iniciativas pedagógicas, garantindo que todos tenham acesso ao aprendizado.",
    habilidades: ["Educação Inclusiva", "Metodologias Ativas", "Psicopedagogia", "Tecnologia Educacional"]
  },
  {
    id: 3,
    nome: "Jorge Lopes",
    funcao: "Product Owner",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "jorge.lopes@ellp.org",
    telefone: "(11) 99999-9012",
    experiencia: "6 anos",
    bio: "Especialista em gestão de produtos e metodologias ágeis, focado em entregar valor real para a comunidade.",
    historia: "Jorge entrou no projeto para liderar e organizar as entregas e prioridades.",
    detalhesFuncao: "Como Product Owner, ele garante que o time entregue valor real à comunidade.",
    habilidades: ["Gestão de Produtos", "Metodologias Ágeis", "Análise de Dados", "Liderança"]
  },
  {
    id: 4,
    nome: "Marina Gomez",
    funcao: "Desenvolvedor",
    foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "marina.gomez@ellp.org",
    telefone: "(11) 99999-3456",
    experiencia: "4 anos",
    bio: "Desenvolvedora full-stack apaixonada por tecnologia e impacto social, especializada em criar soluções digitais acessíveis.",
    historia: "Marina se envolveu para ajudar na construção das ferramentas digitais do projeto.",
    detalhesFuncao: "Ela desenvolve funcionalidades que facilitam o uso do sistema pelos voluntários.",
    habilidades: ["React", "Node.js", "Python", "UI/UX Design"]
  },
  {
    id: 5,
    nome: "Luca Pereira",
    funcao: "Recursos Humanos",
    foto: "https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "luca.pereira@ellp.org",
    telefone: "(11) 99999-7890",
    experiencia: "7 anos",
    bio: "Especialista em gestão de pessoas e desenvolvimento organizacional, focado no bem-estar e crescimento da equipe.",
    historia: "Luca entrou para ajudar na gestão e acolhimento dos voluntários.",
    detalhesFuncao: "Ela cuida do recrutamento, treinamento e bem-estar da equipe.",
    habilidades: ["Gestão de Pessoas", "Recrutamento", "Treinamento", "Desenvolvimento Organizacional"]
  },
];

export default function VoluntariosSection() {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const voluntariosPorPagina = 2;
  
  // Calcular índices para paginação
  const indiceUltimoVoluntario = paginaAtual * voluntariosPorPagina;
  const indicePrimeiroVoluntario = indiceUltimoVoluntario - voluntariosPorPagina;
  const voluntariosAtuais = voluntarios.slice(indicePrimeiroVoluntario, indiceUltimoVoluntario);
  
  // Calcular número total de páginas
  const totalPaginas = Math.ceil(voluntarios.length / voluntariosPorPagina);
  
  // Função para mudar página
  const mudarPagina = (numeroPagina) => {
    setPaginaAtual(numeroPagina);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerSection}>
        <Link to="/" className={styles.voltarButton}>
          ← Voltar
        </Link>
        <div>
          <h1 className={styles.pageTitle}>Voluntários</h1>
          <p className={styles.pageSubtitle}>Conheça nossa equipe dedicada</p>
        </div>
      </div>

      <div className={styles.voluntariosGrid}>
        {voluntariosAtuais.map((voluntario) => (
          <div key={voluntario.id} className={styles.voluntarioCard}>
            <div className={styles.voluntarioHeader}>
              <img src={voluntario.foto} alt={voluntario.nome} className={styles.voluntarioImagem} />
              <div className={styles.voluntarioBasicInfo}>
                <h2 className={styles.voluntarioNome}>{voluntario.nome}</h2>
                <p className={styles.voluntarioFuncao}>{voluntario.funcao}</p>
                <p className={styles.voluntarioExperiencia}>Experiência: {voluntario.experiencia}</p>
              </div>
            </div>
            
            <div className={styles.voluntarioContent}>
              <div className={styles.voluntarioSection}>
                <h3>Sobre</h3>
                <p className={styles.voluntarioBio}>{voluntario.bio}</p>
              </div>

              <div className={styles.voluntarioSection}>
                <h3>História no Projeto</h3>
                <p>{voluntario.historia}</p>
              </div>

              <div className={styles.voluntarioSection}>
                <h3>Função Detalhada</h3>
                <p>{voluntario.detalhesFuncao}</p>
              </div>

              <div className={styles.voluntarioSection}>
                <h3>Contato</h3>
                <div className={styles.contatoInfo}>
                  <p><strong>Email:</strong> {voluntario.email}</p>
                  <p><strong>Telefone:</strong> {voluntario.telefone}</p>
                </div>
              </div>

              <div className={styles.voluntarioSection}>
                <h3>Habilidades</h3>
                <div className={styles.habilidadesTags}>
                  {voluntario.habilidades.map((habilidade, index) => (
                    <span key={index} className={styles.habilidadeTag}>
                      {habilidade}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Componente de Paginação */}
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


