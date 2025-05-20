import Link from "next/link";
import styles from "./InfoProfile.module.css";

const InfoProfile = () => {
  return (
    <div className={styles.info}>
      <h1 className={styles.name}>Esaul Alejandro Alfaro Canales</h1>
      <p className={styles.role}>Ingeniero en Nanotecnología</p>
      <Link
        href="https://www.cedulaprofesional.sep.gob.mx/cedula/presidencia/indexAvanzada.action"
        rel="noreferrer"
        target="_blank"
        className={styles.ced}
      >
        ☞  Cédula: 14501319  ☜
      </Link>
    </div>
  );
};

export default InfoProfile;
