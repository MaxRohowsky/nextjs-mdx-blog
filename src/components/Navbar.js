import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from 'next/link';
import styles from '@/styles/Navbar.module.scss'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			`${styles.responsive_nav}`
		);
	};

	return (
		<>
			<Link style={{ textDecoration: 'none' }} href="/">
				<h3 className={styles.header__logo}>max teaches tech</h3>
			</Link>
			<nav className={styles.header__nav} ref={navRef}>
				<Link style={{ textDecoration: 'none' }} onClick={showNavbar} href="/"><h4 className={styles.nav__link}>Home</h4></Link>
				<Link style={{ textDecoration: 'none' }} onClick={showNavbar} href="/courses"><h4 className={styles.nav__link}>Courses</h4></Link>
				<Link style={{ textDecoration: 'none' }} onClick={showNavbar} href="/blog"><h4 className={styles.nav__link}>Blog</h4></Link>
				<Link style={{ textDecoration: 'none' }} onClick={showNavbar} href="https://www.youtube.com/channel/UCB_IfFmew4M6kgeo6yp18Nw" target="_blank" ><h4 className={styles.nav__link}>Youtube</h4></Link>
				<Link style={{ textDecoration: 'none' }} onClick={showNavbar} href="https://discord.com/invite/JERatQsfY8" target="_blank" ><h4 className={styles.nav__link}>Discord</h4></Link>
				<button
					className={`${styles.nav__btn} ${styles.nav__closebtn}`}
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			


			<button
				className={styles.nav__btn}
				onClick={showNavbar}>
				<FaBars />
			</button>
		</>
	);
}

export default Navbar;