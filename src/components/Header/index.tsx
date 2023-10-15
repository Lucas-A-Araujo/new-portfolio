import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

import LanguageImg from '../../../public/language_icon.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <div className={styles.rectangle}></div>
          <h1>Lucas Alves de Araújo</h1>
        </div>
        <div className={styles.links}>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <button className={styles.button}>
            <Image alt="a" src={LanguageImg} width="24" height="24" />
          </button>
          {/* Adicione mais links conforme necessário */}
        </div>
      </nav>
    </header>
  );
}
