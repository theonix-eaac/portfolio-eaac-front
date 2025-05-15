import { inter, playfair, plexMono } from "@/fonts/fonts";
import "normalize.css";
import "./globals.css";
import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${plexMono.variable} ${playfair.variable} ${styles.lytBody}`}
      >
        {children}
      </body>
    </html>
  );
}
