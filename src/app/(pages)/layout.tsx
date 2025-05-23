import NavbarGlobal from "@/components/constants/NavbarGlobal/NavbarGlobal";
import { inter, playfair, plexMono } from "@/fonts/fonts";
import "normalize.css";
import "../globals.css";
import styles from "../layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${inter.variable} ${plexMono.variable} ${playfair.variable} ${styles.lytBody}`}
    >
      <NavbarGlobal />
      {children}
    </div>
  );
}
