import BeatLoader from 'react-spinners/BeatLoader';
import useHandleForm from './hooks/useHandleForm/useHandleForm';
import useReduxAuth from './hooks/useReduxAuth/useReduxAuth';

const SignIn = () => {
	const { handleChange, handleSubmit, formFields } = useHandleForm();
	const { dispatchGoogleSignIn, isLoading, message } = useReduxAuth();
	return (
		<div className="items-center px-5 mt-10">
			<div className="flex flex-col w-full max-w-md p-6 mx-auto my-6 transition duration-500 ease-in-out transform rounded-lg md:mt-0 secondary-bg-color">
				<div>
					<div className="mb-8 mt-4">
						<h1 className="text-2xl lg:text-3xl text-center">
							Already have an account?
						</h1>
						<p className="text-center font-normal my-2 font-color">
							Sign in with your email and password
						</p>
					</div>
					{message && (
						<div className="text-center text-red-600 mb-5 text-lg">
							{message}
						</div>
					)}
					<div>
						<form className="space-y-6" onSubmit={handleSubmit}>
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
										id="email"
										onChange={handleChange}
										value={formFields.email}
										name="email"
										type="email"
										required
										placeholder="e.g example@yahoo.com"
										className="font-color primary-bg-color block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-500"
									/>
								</div>
							</div>
							<div className="space-y-1">
								<label
									htmlFor="pass"
									className="block text-sm font-medium font-color mb-2"
								>
									{' '}
									Password{' '}
								</label>
								<div>
									<input
										id="password"
										minLength={6}
										onChange={handleChange}
										value={formFields.password}
										name="password"
										type="password"
										data-testid="password"
										required
										placeholder="********"
										className="font-color primary-bg-color block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-bg-indigo-700 focus:ring-offset-2 focus:ring-offset-gray-300"
									/>
								</div>
							</div>
							<div>
								<button
									type="submit"
									className="flex items-center justify-center w-full px-10 py-4 text-base font-bold text-center text-white transition duration-500 ease-in-out transform rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-indigo-700"
								>
									{isLoading ? (
										<div className="text-center z-index">
											<BeatLoader color={'white'} loading={true} />
										</div>
									) : (
										<p>Sign in</p>
									)}
								</button>
							</div>
						</form>
						<div className="relative my-4">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-gray-500"></div>
							</div>
							<div className="relative flex justify-center text-sm">
								<span className="px-2 text-neutral-800 bg-white">
									Or continue with
								</span>
							</div>
						</div>
						<div>
							<button
								onClick={dispatchGoogleSignIn}
								className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-gray-300 shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
							>
								<div className="flex items-center justify-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 48 48"
										width="24px"
										height="24px"
									>
										<path
											fill="#fbc02d"
											d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
										/>
										<path
											fill="#e53935"
											d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
										/>
										<path
											fill="#4caf50"
											d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
										/>
										<path
											fill="#1565c0"
											d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
										/>
									</svg>
									<span className="ml-4 text-white"> Log in with Google</span>
								</div>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
