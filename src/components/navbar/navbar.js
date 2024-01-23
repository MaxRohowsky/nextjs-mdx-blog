'use client';
import { useRef, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from 'next/link';
import styles from './navbar.module.scss';
import Image from 'next/image';


//import { useTheme } from 'next-themes'


function Navbar() {
	// Dark mode
	//const { theme, setTheme } = useTheme()
	//const [mounted, setMounted] = useState(false)
	//useEffect(() => setMounted(true), [])
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScroll(window.scrollY > 1);
		});

	}, []);	

	//console.log(scroll);
	// Mobile Nav
	const [showMobileNav, setShowMobileNav] = useState(false)
	const handleShowMobileNavbar = () => {
		setShowMobileNav(!showMobileNav)
	}

	// Use useEffect to add the 'hidden_nav' class to the navigation element initially
	//useEffect(() => {
	//	navRef.current.classList.add(`${styles.responsive_nav}`);
	//}, []);

	//const showNavbar = () => {
	//	navRef.current.classList.toggle(
	//		`${styles.responsive_nav}`
	//	);
	//};

	return (
		<header className={scroll ? `${styles.header} ${styles.scrolled}` : styles.header}>

		<div className={styles.header__wrap}>
			<Link className={styles.header__brand} href="/">
				<Image
					src="/transparent-logo.png" // Path relative to the `public` directory
					alt="Transparent Logo"
					width={50} // Set your desired width
					height={50} // Set your desired height
				/>
				<h3 className={styles.header__txt}>max on tech</h3>
			</Link>
			
			<nav className={`${styles.header__nav} ${!showMobileNav && styles.hide}`} >
				<Link className={styles.nav__link} style={{ textDecoration: 'none' }} onClick={handleShowMobileNavbar} href="/">Home</Link>
				<Link className={styles.nav__link} style={{ textDecoration: 'none' }} onClick={handleShowMobileNavbar} href="/courses">Courses</Link>
				<Link className={styles.nav__link} style={{ textDecoration: 'none' }} onClick={handleShowMobileNavbar} href="/blog">Blog</Link>
				<Link className={styles.nav__link} style={{ textDecoration: 'none' }} onClick={handleShowMobileNavbar} href="https://www.youtube.com/channel/UCB_IfFmew4M6kgeo6yp18Nw" target="_blank" >Youtube</Link>
				<Link className={styles.nav__link} style={{ textDecoration: 'none' }} onClick={handleShowMobileNavbar} href="https://discord.com/invite/JERatQsfY8" target="_blank" >Discord</Link>

				{/*mounted && theme === 'dark' && (
					<button className={styles.nav__link} onClick={() => setTheme('light')}>
						<i className={`fas ${'fa-sun'}`}></i>
					</button>)}
				{mounted && (theme === 'light' || theme === 'system') && (
					<button className={styles.nav__link} onClick={() => setTheme('dark')}>
						<i className={`fas ${'fa-moon'}`}></i>
				</button>)*/}


				<button
					className={`${styles.nav__btn} ${styles.nav__closebtn}`}
					onClick={handleShowMobileNavbar}>
					<FaTimes />
				</button>
			</nav>



			<button className={styles.nav__btn} onClick={handleShowMobileNavbar}>
				<FaBars />
			</button>
		</div>
		</header>
	);
}

export default Navbar;