import CardInfo from "../CardInfo/CardInfo";
import Contact from "../Contact/Contact";
import ImgProfile from "../ImgProfile/ImgProfile";
import InfoProfile from "../InfoProfile/InfoProfile";
import Typewriter from "../Typewriter/Typewriter";

import styles from "./BentoContainer.module.css";

export const BentoContainer: React.FC = () => {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.vibration}></div>
      </div>

      <div className={`${styles.grid}`}>
        <div className={`${styles.item0} ${styles.item}`}>
          <ImgProfile />
        </div>

        <div className={`${styles.item1} ${styles.item}`}>
          <Typewriter />
        </div>
        <div className={`${styles.item2} ${styles.item}`}>
          <InfoProfile />
        </div>

        <div className={`${styles.item3} ${styles.item}`}>
          <CardInfo
            title="Software"
            description="Aquí podrás encontrar lo relacionado con el desarrollo de software"
            imageSrc="/CardInfo/Software.webp"
            linkHref="/software"
          />
        </div>
        <div className={`${styles.item4} ${styles.item}`}>
          <CardInfo
            title="Ciencia"
            description="Aquí podrás encontrar lo relacionado con la investigación"
            imageSrc="/CardInfo/Ciencia.webp"
            linkHref="/ciencia"
          />
        </div>
        <div className={`${styles.item5} ${styles.item}`}>
          <CardInfo
            title="Blog"
            description="Un poco de divulgación de contenido"
            imageSrc="/CardInfo/Blog.webp"
            linkHref="/blog"
          />
        </div>

        <div className={`${styles.item6} ${styles.item}`}>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default BentoContainer;
