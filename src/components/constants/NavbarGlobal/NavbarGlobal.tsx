"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./NavbarGlobal.module.css";

export default function NavbarGlobal() {
  const [active, setActive] = useState("#inicio");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Software", href: "/|software" },
    { label: "Ciencia", href: "/ciencia" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <nav className={clsx(styles.navbar, scrolled && styles.navbarScrolled)}>
      <div className={styles.container}>
        <div className={styles.containerLogo}>
          <Image
            className={styles.logo}
            alt="EAAC"
            fill
            src="/NavbarGlobal/Logo-blanco.webp"
          />
        </div>

        <div
          className={clsx(styles.hamburger, open && styles.open)}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </div>

        <ul className={clsx(styles.links, open && styles.linksMobile)}>
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={clsx(styles.link, active === href && styles.active)}
                onClick={() => {
                  setActive(href);
                  setOpen(false); // Cierra menú al dar clic
                }}
              >
                <span className={styles.linkText}>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
