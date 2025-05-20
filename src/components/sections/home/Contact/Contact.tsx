import { HiMail } from "react-icons/hi";
import styles from "./Contact.module.css";
import Link from "next/link";

const ProtectedEmail = () => {
  const email = "alf.can.es.al";
  const domain = "gmail.com";

  return (
    <Link
      href={`mailto:${email}@${domain}`}
      aria-label="Enviar correo"
      className={styles.mailLink}
    >
      <span className={styles.mailIcon}>
        <HiMail />
      </span>
    </Link>
  );
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Contacto</div>
      <div className={styles.icon}>
        <ProtectedEmail />
      </div>
    </div>
  );
};

export default Contact;
