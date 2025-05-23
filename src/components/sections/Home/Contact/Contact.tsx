import { HiMail } from "react-icons/hi";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Contacto</div>
      <div className={styles.icon}>
        <HiMail />
      </div>
    </div>
  );
};

export default Contact;
