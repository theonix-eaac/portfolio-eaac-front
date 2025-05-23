import Link from "next/link";
import styles from "./HeaderBlog.module.css";

export default function HeaderBlog() {
  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>Mi Blog Verde</span>
        <span className={styles.subtitle}>Natural | Reflexivo | Atemporal</span>
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>
          Inicio
        </Link>
        <Link href="/articulos" className={styles.link}>
          Artículos
        </Link>
        <Link href="#sobre-mi" className={styles.link}>
          Sobre mí
        </Link>
        <Link href="#contacto" className={styles.link}>
          Contacto
        </Link>
      </nav>
    </header>
  );
}
