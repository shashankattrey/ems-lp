'use client';

import styles from '../../styles/LandingPage.module.css';

export default function Header() {
  return (
    <header className={styles.whiteHeader}>
      <img src="/logo_ems.png" alt="Logo" className={styles.logo} />
    </header>
  );
}
