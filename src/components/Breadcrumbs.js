import Link from 'next/link';
import styles from '../styles/Breadcrumbs.module.scss';

const Breadcrumbs = ({ crumbs }) => {
  return (
    <nav className={styles.breadcrumbs}>
      {crumbs.map((crumb, index) => (
        <span key={index}>
          {crumb.path ? (
            <Link href={crumb.path}>
              <span className={styles.link}>{crumb.label}</span>
            </Link>
          ) : (
            <span>{crumb.label}</span>
          )}
          {index < crumbs.length - 1 && <span className={styles.separator}> | </span>}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;