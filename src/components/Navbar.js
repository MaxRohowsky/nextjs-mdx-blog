import { useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from 'next/link';
import styles from '@/styles/Navbar.module.scss';
import Image from 'next/image';


import { useTheme } from 'next-themes'


function Navbar() {
	const navRef = useRef();




	const { theme, setTheme } = useTheme()
	




	// Use useEffect to add the 'hidden_nav' class to the navigation element initially
	useEffect(() => {
		navRef.current.classList.add(`${styles.responsive_nav}`);
	}, []);

	const showNavbar = () => {
		navRef.current.classList.toggle(
			`${styles.responsive_nav}`
		);
	};

	return (
		<div className={styles.wrap}>
			<Link className={styles.header__brand} href="/">
				<Image
					src="/transparent-logo.png" // Path relative to the `public` directory
					alt="Transparent Logo"
					width={50} // Set your desired width
					height={50} // Set your desired height
				/>
				<h3 className={styles.header__txt}>max on tech</h3>

			</Link>
			<nav className={styles.header__nav} ref={navRef}>
				<Link className={styles.nav__link} style={{ textDecoration: 'none' }} onClick={showNavbar} href="/">Home</Link>
				<Link className={styles.nav__link} style={{ textDecoration: 'none' }} onClick={showNavbar} href="/courses">Courses</Link>
				<Link className={styles.nav__link} style={{ textDecoration: 'none' }} onClick={showNavbar} href="/blog">Blog</Link>
				<Link className={styles.nav__link} style={{ textDecoration: 'none' }} onClick={showNavbar} href="https://www.youtube.com/channel/UCB_IfFmew4M6kgeo6yp18Nw" target="_blank" >Youtube</Link>
				<Link className={styles.nav__link} style={{ textDecoration: 'none' }} onClick={showNavbar} href="https://discord.com/invite/JERatQsfY8" target="_blank" >Discord</Link>
				<button onClick={() => setTheme('light')}>Light Mode</button>
				<button onClick={() => setTheme('dark')}>Dark Mode</button>
				<button
					className={`${styles.nav__btn} ${styles.nav__closebtn}`}
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>



			<button className={styles.nav__btn} onClick={showNavbar}>
				<FaBars />
			</button>
		</div>
	);
}

export default Navbar;