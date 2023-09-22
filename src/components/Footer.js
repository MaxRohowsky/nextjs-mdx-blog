import styles from '../styles/Footer.module.scss'
import Link from 'next/link';

export default function Footer() {
  return (
      <div>
        {/*<Link href="/sitemap" className={styles.text}>
          Sitemap
  </Link>*/}

        <Link href="/privacy" className={styles.text}>
          Privacy
        </Link>
        {' | '}
        <Link href="/imprint" className={styles.text}>
          Imprint
        </Link>
      </div>
  );
};

