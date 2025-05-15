"use client";

import Link from "next/link";
import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img
          src="/Profile/Perfil.webp"
          alt="Esaul Alfaro"
          className={styles.avatar}
        />
        <div className={styles.info}>
          <h1 className={styles.name}>Esaul Alejandro Alfaro Canales</h1>
          <p className={styles.role}>Ingeniero en Nanotecnología</p>
          <Link
            href="https://www.cedulaprofesional.sep.gob.mx/cedula/presidencia/indexAvanzada.action"
            rel="noreferrer"
            target="_blank"
            className={styles.ced}
          >
            Cédula: 14501319
          </Link>
        </div>
      </div>
    </div>
  );
}
