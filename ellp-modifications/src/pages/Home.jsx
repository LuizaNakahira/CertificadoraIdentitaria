import React from "react";
import { Link } from "react-router-dom";
import ProximosEventos from "./ProximosEventos";
import VoluntariosResumo from "./VoluntariosResumo";
import styles from "./Home.module.css";

export default function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>ELLP</h1>
        <nav className={styles.navigation}>
          <button onClick={() => scrollToSection('eventos')} className={styles.navButton}>
            EVENTOS
          </button>
          <button onClick={() => scrollToSection('voluntarios')} className={styles.navButton}>
            VOLUNTÁRIOS
          </button>
        </nav>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <h2 className={styles.heroTitle}>ELLP</h2>
          <p className={styles.heroSubtitle}>
            Conectando pessoas através de eventos e voluntariado. 
            Junte-se à nossa comunidade e faça a diferença na sociedade.
          </p>
        </section>

        <section id="eventos" className={styles.section}>
          <h2 className={styles.sectionTitle}>Próximos Eventos</h2>
          <ProximosEventos />
        </section>

        <section id="voluntarios" className={styles.section}>
          <h2 className={styles.sectionTitle}>Nossos Voluntários</h2>
          <VoluntariosResumo />
        </section>
      </main>
    </div>
  );
}

