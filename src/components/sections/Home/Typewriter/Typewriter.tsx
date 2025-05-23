"use client";

import { useEffect, useState } from "react";
import styles from "./Typewriter.module.css";

const messages = [
  "GRACIAS POR ESTAR AQUÍ",
  "RECUERDA",
  "SOMOS FRECUENCIA, SOMOS ONDAS, SOMOS ENERGÍA",
];

const fontClasses = [styles.inter, styles.plexMono, styles.playfair];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (messageIndex < messages.length) {
      const current = messages[messageIndex];
      if (charIndex < current.length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + current[charIndex]);
          setCharIndex(charIndex + 1);
        }, 70);
        return () => clearTimeout(timeout);
      } else {
        const pause = setTimeout(() => {
          setMessageIndex(messageIndex + 1);
          setCharIndex(0);
          setText("");
        }, 1600);
        return () => clearTimeout(pause);
      }
    } else {
      setFinished(true);
    }
  }, [charIndex, messageIndex]);

  const renderedText = text.split("").map((char, index) => {
    const randomClass =
      fontClasses[Math.floor(Math.random() * fontClasses.length)];
    return (
      <span key={index} className={`${styles.char} ${randomClass}`}>
        {char}
      </span>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.pulseAura} />
      <div className={styles.particleOverlay} />

      {!finished ? (
        <p className={styles.text}>
          {renderedText}
          <span className={styles.cursor}>|</span>
        </p>
      ) : (
        <h2 className={styles.textFixed}>
          ¡Hey! Qué gusto tenerte por aquí.
          <span>
            Ojalá conectemos, colaboremos o incluso construyamos algo grande
            juntos.
          </span>
        </h2>
      )}
    </div>
  );
}
