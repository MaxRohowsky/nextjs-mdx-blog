'use client';

import { FaBars } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Sun, FishSymbol } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Separator } from "@/components/ui/separator";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import {
	faYoutube,
	faXTwitter,
	faLinkedin,
	faDiscord,
	faGithub
} from "@fortawesome/free-brands-svg-icons";




export default function Navbar() {
	const pathname = usePathname();
	const buttonVariant = pathname === '/' ? 'primary' : 'ghost';

	return (
		<header className="max-w-screen-xl mx-auto">
			<div className="flex align-middle justify-between items-center m-4 pb-2 border-b">

				<span className="font-sans flex gap-2">
					<FishSymbol className="text-blue-400 dark:text-white" />
					<span> Maximilian Rohowsky, Ph.D.</span>
				</span>

				<MobileMenu />

				<DesktopMenu pathname={pathname} />
			</div>
		</header>
	);
}


function DesktopMenu({ pathname }) {
	return (
		<div className={`hidden md:block`}>
			<nav className=" flex items-center gap-4 transition-all" id="navbar-default">
				<Button asChild
					className={cn(pathname === '/' ? 'bg-neutral-50' : '', '')}
					variant={'ghost'}
				>
					<Link href="/">
						Home
					</Link>

				</Button>

				<Button asChild
					className={cn(pathname === '/blog' ? 'bg-neutral-50' : '', '')}
					variant={'ghost'}
				>
					<Link href="/blog">
						Blog
					</Link>
				</Button>

				<Button asChild
					className={cn(pathname === '/projects' ? 'bg-neutral-50' : '', '')}
					variant={'ghost'}
				>
					<Link href="/projects">
						Projects
					</Link>
				</Button>


				<DropdownMenu >
					<DropdownMenuTrigger asChild>
						<Button variant="ghost">Socials</Button>

					</DropdownMenuTrigger>
					<DropdownMenuContent className="mt-3">


						<DropdownMenuItem className="group flex justify-center px-6 py-2" asChild>
							<a href="https://www.youtube.com/channel/UCB_IfFmew4M6kgeo6yp18Nw">
								<span className="text-red-500 mr-2">
									<FontAwesomeIcon icon={faYoutube} />
								</span>
								<span className="mr-2">
									YouTube
								</span>
							</a>
						</DropdownMenuItem>

						<DropdownMenuSeparator />

						<DropdownMenuItem className="group flex justify-center px-6 py-2">
							<a href="https://discord.com/invite/JERatQsfY8">
								<span className="text-indigo-500  mr-2">
									<FontAwesomeIcon icon={faDiscord} />
								</span>
								<span className=" mr-2">
									Discord
								</span>
							</a>
						</DropdownMenuItem>

						<DropdownMenuSeparator />

						<DropdownMenuItem className="group flex justify-center px-6 py-2">
							<span className="text-blue-500  mr-2">
								<FontAwesomeIcon icon={faLinkedin} />
							</span>
							<span className=" mr-2">
								LinkedIn
							</span>
						</DropdownMenuItem>

						<DropdownMenuSeparator />

						<DropdownMenuItem className="group flex justify-center px-6 py-2">
							<span className="  mr-2">
								<FontAwesomeIcon icon={faXTwitter} />
							</span>
							<span className=" mr-2">
								Twitter
							</span>
						</DropdownMenuItem>

					</DropdownMenuContent>
				</DropdownMenu>

				<Separator orientation="vertical" className="mx-4 h-5" />

				<Button
					onClick={() => { document.documentElement.classList.toggle('dark'); }}
					variant="label">
					<Sun />
				</Button>
			</nav>
		</div>

	)
}

function MobileMenu() {
	return (
		<Dialog >
			<DialogTrigger asChild className="md:hidden">
				<Button variant="outline"><FaBars /></Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Menu</DialogTitle>
				</DialogHeader>
				<nav className=" flex flex-col items-center gap-3" id="navbar-default">

					<MobileSeparator text="Navigation" />


					<Button asChild
						variant="ghost"
					>
						<Link href="/">
							Home
						</Link>

					</Button>

					<Separator orientation="horizontal" className="w-full " />

					<Button asChild
						variant="ghost"
					>
						<Link href="/blog">
							Blog
						</Link>
					</Button>

					<Separator orientation="horizontal" className="w-full " />

					<Button asChild
						variant="ghost"
					>
						<Link href="/projects">
							Projects
						</Link>
					</Button>


					<MobileSeparator text="Socials" />


					<span className="flex flex-wrap justify-between w-full px-6">
						<a href="https://www.youtube.com/channel/UCB_IfFmew4M6kgeo6yp18Nw">
							<FontAwesomeIcon icon={faYoutube} className="text-red-500 size-8 hover:bg-gray-100 p-2 rounded-full" />
						</a>
						<a href="https://github.com">
							<FontAwesomeIcon icon={faGithub} className="size-8 hover:bg-gray-100 p-2 rounded-full" />
						</a>
						<a href="https://discord.com/invite/JERatQsfY8">
							<FontAwesomeIcon icon={faDiscord} className="text-indigo-500 size-8 hover:bg-gray-100 p-2 rounded-full" />
						</a>
						<a href="https://www.linkedin.com">
							<FontAwesomeIcon icon={faLinkedin} className="text-blue-500 size-8 hover:bg-gray-100 p-2 rounded-full" />
						</a>
						<a href="https://twitter.com">
							<FontAwesomeIcon icon={faXTwitter} className="size-8 hover:bg-gray-100 p-2 rounded-full " />
						</a>
					</span>

					<MobileSeparator text="Dark Mode" />



					<Button
						onClick={() => { document.documentElement.classList.toggle('dark'); }}
						variant="label">
						<Sun />
					</Button>
				</nav>
				<DialogFooter className="sm:justify-start">
					<DialogClose asChild>
						<Button type="button" variant="destructive">
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}

function MobileSeparator({ text }) {
	return (
		<div className="relative w-full">
			<div className="absolute inset-0 flex items-center">
				<span className="w-full border-t" />
			</div>
			<div className="relative flex justify-left text-xs uppercase">
				<span className="bg-background px-2 text-muted-foreground">
					{text}
				</span>
			</div>
		</div>
	)
}