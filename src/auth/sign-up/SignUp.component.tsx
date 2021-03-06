import BeatLoader from 'react-spinners/BeatLoader';
import useForm from '../hooks/useForm';
import useReduxAuth from '../hooks/useReduxAuth';

const registerFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const Signup = () => {
	const { registerInput, handleRegisterChange, handleSubmit, message } =
		useForm({
			registerFields,
		});
	const { isLoading } = useReduxAuth();
	return (
		<div className="items-center px-5 mt-5">
			<div className="flex flex-col w-full max-w-md p-6 mx-auto transition duration-500 ease-in-out transform rounded-lg md:mt-0 secondary-bg-color">
				<div>
					<div className="mb-8 mt-4">
						<h1 className="text-2xl lg:text-3xl text-center">
							Don't have an account?
						</h1>
						<p className="text-center font-normal my-2 font-color">
							Sign up with your email and password
						</p>
					</div>
					{message && (
						<div className="text-center text-red-600 mb-5 text-lg">
							{message}
						</div>
					)}
					<div>
						<form
							onSubmit={(e) => handleSubmit(e, 'register')}
							className="space-y-6"
						>
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium font-color"
								>
									Company Name
								</label>
								<div className="mt-2">
									<input
										value={registerInput.displayName}
										onChange={handleRegisterChange}
										id="name"
										name="displayName"
										type="text"
										autoComplete="current-name"
										required
										placeholder="Enter your company name"
										className="primary-bg-color block w-full px-5 py-3 text-base text-neutral-400 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium font-color"
								>
									{' '}
									Email address{' '}
								</label>
								<div className="mt-2">
									<input
										value={registerInput.email}
										onChange={handleRegisterChange}
										id="email"
										name="email"
										type="email"
										autoComplete="current-email"
										required
										placeholder="Enter your email"
										className="primary-bg-color block w-full px-5 py-3 text-base text-neutral-400 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
									/>
								</div>
							</div>
							<div className="space-y-1">
								<label
									htmlFor="password"
									className="block text-sm font-medium font-color"
								>
									{' '}
									Password{' '}
								</label>
								<div className="mt-2">
									<input
										id="password"
										name="password"
										type="password"
										onChange={handleRegisterChange}
										value={registerInput.password}
										minLength={6}
										required
										data-testid="pass"
										placeholder="********"
										className="primary-bg-color block w-full px-5 py-3 text-base text-neutral-400 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
									/>
								</div>
							</div>
							<div className="space-y-1">
								<label
									htmlFor="confirmPassword"
									className="block text-sm font-medium font-color"
								>
									{' '}
									Confirm Password{' '}
								</label>
								<div className="mt-1">
									<input
										id="confirmPassword"
										name="confirmPassword"
										type="password"
										onChange={handleRegisterChange}
										value={registerInput.confirmPassword}
										data-testid="confirmPass"
										minLength={6}
										required
										placeholder="********"
										className="primary-bg-color block w-full px-5 py-3 text-base text-neutral-400 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
									/>
								</div>
							</div>
							<div>
								<button
									type="submit"
									className="bg-indigo-700 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
								>
									{isLoading ? (
										<div className="text-center z-index">
											<BeatLoader color={'white'} loading={true} />
										</div>
									) : (
										<p>Sign up</p>
									)}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
