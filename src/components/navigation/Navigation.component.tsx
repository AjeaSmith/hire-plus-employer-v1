import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
	return (
		<header className="logo sticky top-0 z-10 border-b-2 border-gray-700 px-10 py-5">
			<div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
				<Link
					to="/"
					className="flex title-font font-bold items-center mb-4 md:mb-0 text-md"
				>
					Hire <span className="mr-1 text-indigo-500">+Plus</span>
				</Link>

				<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
					<Link to="/" className="mr-5 hover:text-gray-500">
						Candidates
					</Link>
					<Link to="auth/employers" className="mr-5 hover:text-gray-500">
						Sign In
					</Link>
					<Link to="auth/employers/sign-up" className="mr-5 hover:text-gray-500">
						Sign Up
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Navigation;
