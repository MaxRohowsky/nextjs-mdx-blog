import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 
import Link from 'next/link';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>max teaches tech</h3>
			<nav ref={navRef}>
				<Link href="/courses"><h4>Courses</h4></Link>
				<Link href="/blog"><h4>Blog</h4></Link>
				<Link href="https://www.youtube.com/channel/UCB_IfFmew4M6kgeo6yp18Nw" target="_blank" ><h4>Youtube</h4></Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;