import styles from './footer.module.scss'
import Link from 'next/link';

// TODO: Add site map to footer

export default function Footer() {
  return (
    <div>
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

