import { Link, useNavigate, useParams } from 'react-router-dom';
import { signoutUser } from '../../store/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const Navigation = () => {
	const { employeeId } = useParams();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { isSignedIn, currentUser } = useAppSelector((state) => state.auth);

	const logout = () => {
		try {
			dispatch(signoutUser())
				.unwrap()
				.then(() => {
					navigate('auth/employers');
				});
		} catch (error) {
			console.log('from logout', error);
		}
	};
	return (
		<header className="logo sticky top-0 z-10 border-b-2 border-gray-700 px-10 py-5">
			<div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
				<a href="https://hire-plus-v1.vercel.app/">
					Hire <span className="mr-1 text-indigo-500">+Plus</span>
				</a>
				<Link
					to="/"
					className="flex title-font font-bold items-center mb-4 md:mb-0 text-md"
				>
					<span className="pr-2">Employers</span>
					{isSignedIn && currentUser.displayName ? (
						<span className="border-l-2 border-gray-700 pl-2">
							{currentUser.displayName}
						</span>
					) : null}
				</Link>

				{isSignedIn ? (
					<>
						<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
							{currentUser.uid === employeeId ? (
								<Link to="/" className="mr-5 hover:text-gray-500">
									Candidates
								</Link>
							) : null}

							<Link
								to={`company/${currentUser.uid}`}
								className="mr-5 hover:text-gray-500"
							>
								Company Profile
							</Link>
						</nav>
						<button
							onClick={logout}
							className="bg-indigo-700 inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 text-white"
						>
							Logout
						</button>
					</>
				) : (
					<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
						{currentUser.uid === employeeId ? (
							<Link to="/" className="mr-5 hover:text-gray-500">
								Candidates
							</Link>
						) : null}
						<Link to="auth/employers" className="mr-5 hover:text-gray-500">
							Sign In
						</Link>
						<Link
							to="auth/employers/sign-up"
							className="mr-5 hover:text-gray-500"
						>
							Sign Up
						</Link>
					</nav>
				)}
			</div>
		</header>
	);
};

export default Navigation;
