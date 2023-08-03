//import styles from '../styles/Footer.module.scss'
import Link from 'next/link';

export default function Footer() {
  return (
    
      <div>
        <Link href="/sitemap" style={{textDecoration: "none", color: "black"}}>
          Sitemap
        </Link>
        {' | '}
        <Link href="/privacy" style={{textDecoration: "none", color: "black"}}>
          Privacy
        </Link>
        {' | '}
        <Link href="/imprint" style={{textDecoration: "none", color: "black"}}>
          Imprint
        </Link>
      </div>
      
  );
};

