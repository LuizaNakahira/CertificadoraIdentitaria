import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./VoluntariosResumo.module.css";

const voluntariosResumo = [
  {
    id: 1,
    nome: "Ana Silva",
    funcao: "Marketing",
    foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "ana.silva@ellp.org",
    telefone: "(11) 99999-1234",
    experiencia: "5 anos",
    descricao: "Especialista em marketing digital e estratégias de comunicação.",
    habilidades: ["Marketing Digital", "Redes Sociais", "Design Gráfico"]
  },
  {
    id: 2,
    nome: "Carlos Souza",
    funcao: "Ensino",
    foto: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "carlos.souza@ellp.org",
    telefone: "(11) 99999-5678",
    experiencia: "8 anos",
    descricao: "Professor dedicado com experiência em educação inclusiva.",
    habilidades: ["Educação Inclusiva", "Metodologias Ativas", "Psicopedagogia"]
  },
];

export default function VoluntariosResumo() {
  const [voluntarioExpandido, setVoluntarioExpandido] = useState(null);

  const toggleVoluntario = (id) => {
    setVoluntarioExpandido(voluntarioExpandido === id ? null : id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.voluntariosGrid}>
        {voluntariosResumo.map((voluntario) => (
          <div 
            key={voluntario.id} 
            className={`${styles.voluntarioCard} ${voluntarioExpandido === voluntario.id ? styles.expandido : ''}`}
            onClick={() => toggleVoluntario(voluntario.id)}
          >
            <div className={styles.voluntarioHeader}>
              <img src={voluntario.foto} alt={voluntario.nome} className={styles.voluntarioImagem} />
              <div className={styles.voluntarioInfo}>
                <h3>{voluntario.nome}</h3>
                <p className={styles.funcao}>{voluntario.funcao}</p>
                
                {voluntarioExpandido === voluntario.id && (
                  <div className={styles.detalhesExpandidos}>
                    <p className={styles.descricao}>{voluntario.descricao}</p>
                    <div className={styles.infoAdicional}>
                      <p><strong>Email:</strong> {voluntario.email}</p>
                      <p><strong>Telefone:</strong> {voluntario.telefone}</p>
                      <p><strong>Experiência:</strong> {voluntario.experiencia}</p>
                    </div>
                    <div className={styles.habilidades}>
                      <strong>Habilidades:</strong>
                      <div className={styles.habilidadesTags}>
                        {voluntario.habilidades.map((habilidade, index) => (
                          <span key={index} className={styles.habilidadeTag}>
                            {habilidade}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/voluntarios" className={styles.verTodosButton}>
        Ver Todos os Voluntários
      </Link>
    </div>
  );
}
