import styles from './footer.module.scss'
import Link from 'next/link';

// TODO: Add site map to footer

export default function Footer() {
  return (
    <div>
      <Link href="/privacy" className="bg-black">
        Privacy
      </Link>
      {' | '}
      <Link href="/imprint" className="text-red-800">
        Imprint
      </Link>
    </div>
  );
};

