import Link from 'next/link';
import styles from './CardInfo.module.css';

interface CardInfoProps {
  title: string;
  description: string;
  imageSrc: string;
}

const CardInfo: React.FC<CardInfoProps> = ({ title, description, imageSrc }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <img src={imageSrc} alt={title} className={styles.image} />
        </div>
        <div className={styles.cardBack}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <Link href="/" className={styles.link}>Mostrar</Link>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
