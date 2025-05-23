import Link from "next/link";
import styles from "./CardInfo.module.css";

interface CardInfoProps {
  title: string;
  description: string;
  imageSrc: string;
  linkHref?: string;
  linkLabel?: string;
}

const CardInfo: React.FC<CardInfoProps> = ({
  title,
  description,
  imageSrc,
  linkHref = "/",
  linkLabel = "Mostrar",
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <img src={imageSrc} alt={title} className={styles.image} />
          <h3 className={styles.title}>{title}</h3>
        </div>

        <div className={styles.cardBack}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <Link href={linkHref} className={styles.link}>
            {linkLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
