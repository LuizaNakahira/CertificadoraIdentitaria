import { Link } from "react-router-dom";
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
            <Link to="/Eventos" className={styles.link}>
                <div className={styles.menuItem}>
                    <h2>EVENTOS</h2>
                </div>
            </Link>

            <div className={styles.menuItem}>
                <h2>VOLUNTARIOS</h2>
            </div>
        </main>

        <h1 className={styles.brand}>ELLP</h1>      
    </div>
  );
}

export default Home;
