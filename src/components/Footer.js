import styles from '../styles/Footer.module.scss'
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <Link href="/sitemap">
          Sitemap
        </Link>
        {' | '}
        <Link href="/privacy">
          Privacy
        </Link>
        {' | '}
        <Link href="/imprint">
          Imprint
        </Link>
      </div>

    </footer>
  );
};

