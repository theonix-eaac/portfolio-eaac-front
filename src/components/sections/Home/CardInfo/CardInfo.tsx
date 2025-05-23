"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  linkLabel = "Ver más",
}) => {
  const [flipped, setFlipped] = useState(false);
  const [autoFlipEnabled, setAutoFlipEnabled] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!autoFlipEnabled) return;

    const randomDelay = Math.floor(Math.random() * 5000) + 5000; // entre 5s y 10s

    const flip = () => {
      setFlipped((prev) => !prev);
      timeoutRef.current = setTimeout(flip, randomDelay);
    };

    timeoutRef.current = setTimeout(flip, randomDelay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [autoFlipEnabled]);

  const handleManualFlip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setAutoFlipEnabled(false);
    setFlipped((prev) => !prev);
  };

  return (
    <div className={styles.cardContainer} onClick={handleManualFlip}>
      <div className={`${styles.cardInner} ${flipped ? styles.flipped : ""}`}>
        <div className={styles.cardFront}>
          <img src={imageSrc} alt={title} className={styles.image} />
          <h3 className={styles.titleFront}>{title}</h3>
        </div>

        <div className={styles.cardBack}>
          <h3 className={styles.titleBack}>{title}</h3>
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
