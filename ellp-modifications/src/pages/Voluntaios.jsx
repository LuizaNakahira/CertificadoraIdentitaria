import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Voluntarios.module.css';
import { FaHome } from "react-icons/fa";

const voluntarios = [
  { 
    nome: "Ana Silva", 
    funcao: "Marketing", 
    foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    bio: "Especialista em psicologia escolar e mediação emocional.",
    historia: "Ana encontrou o projeto buscando maneiras de aplicar sua expertise em psicologia para ajudar na educação.",
    detalhesFuncao: "No marketing, Ana cria campanhas que conectam o projeto com a comunidade e apoiadores." 
  },
  { 
    nome: "Carlos Souza", 
    funcao: "Ensino", 
    foto: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    bio: "Trabalha com inclusão educacional há mais de 10 anos.",
    historia: "Carlos se juntou ao projeto para promover práticas inclusivas na educação.",
    detalhesFuncao: "Ele lidera as iniciativas pedagógicas, garantindo que todos tenham acesso ao aprendizado."
  },
  { 
    nome: "Jorge Lopes", 
    funcao: "Product Owner", 
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    bio: "Apaixonada por arte e educação, atua em oficinas criativas.",
    historia: "Jorge entrou no projeto para liderar e organizar as entregas e prioridades.",
    detalhesFuncao: "Como Product Owner, ele garante que o time entregue valor real à comunidade."
  },
  { 
    nome: "Marina Gomez", 
    funcao: "Desenvolvedor", 
    foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    bio: "Apaixonada por arte e educação, atua em oficinas criativas.",
    historia: "Marina se envolveu para ajudar na construção das ferramentas digitais do projeto.",
    detalhesFuncao: "Ela desenvolve funcionalidades que facilitam o uso do sistema pelos voluntários."
  },
  { 
    nome: "Luca Pereira", 
    funcao: "Recursos Humanos", 
    foto: "https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    bio: "Apaixonada por arte e educação, atua em oficinas criativas.",
    historia: "Luca entrou para ajudar na gestão e acolhimento dos voluntários.",
    detalhesFuncao: "Ela cuida do recrutamento, treinamento e bem-estar da equipe."
  },
];

function Voluntarios() {
  const [voluntarioSelecionado, setVoluntarioSelecionado] = useState(null);

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.homeLink}>
        <FaHome className={styles.homeIcon} />
        <span className={styles.homeText}>Home</span>
      </Link>

      <h1 className={styles.titulo}>Voluntários do Projeto</h1>

      <div className={styles.lista} style={{ filter: voluntarioSelecionado ? 'blur(4px)' : 'none' }}>
        {voluntarios.map((v, index) => (
          <div key={index} className={styles.cartao} onClick={() => setVoluntarioSelecionado(v)}>
            <img src={v.foto} alt={v.nome} className={styles.foto} />
            <h2 className={styles.nome}>{v.nome}</h2>
            <p className={styles.funcao}>{v.funcao}</p>
          </div>
        ))}
      </div>

      {voluntarioSelecionado && (
        <div className={styles.cardOverlay}>
          <div className={styles.cardContent}>
            <img src={voluntarioSelecionado.foto} alt={voluntarioSelecionado.nome} className={styles.cardFoto} />
            <h2 className={styles.cardNome}>{voluntarioSelecionado.nome}</h2>
            <p className={styles.cardFuncao}>{voluntarioSelecionado.funcao}</p>
            <p className={styles.cardBio}>{voluntarioSelecionado.bio}</p>
            <p className={styles.cardHistoria}>
              <strong>Como entrou no projeto:</strong> {voluntarioSelecionado.historia}
            </p>
            <p className={styles.cardDetalhesFuncao}>
              <strong>Sobre a função:</strong> {voluntarioSelecionado.detalhesFuncao}
            </p>
            <button className={styles.cardClose} onClick={() => setVoluntarioSelecionado(null)}>Voltar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Voluntarios;
