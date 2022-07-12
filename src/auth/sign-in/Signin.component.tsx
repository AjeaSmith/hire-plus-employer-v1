import BeatLoader from 'react-spinners/BeatLoader';
import useHandleForm from '../hooks/useHandleForms';

import useReduxAuth from '../hooks/useReduxAuth';

const loginFields = {
	email: '',
	password: '',
};
const SignIn = () => {
	const {
		handleLoginChange,
		handleSubmit,
		loginInput,
		message: formMessage,
	} = useHandleForm({
		loginFields,
	});
	const { isLoading, message } = useReduxAuth();
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
					{formMessage && (
						<div className="text-center text-red-600 mb-5 text-lg">
							{formMessage}
						</div>
					)}
					<div>
						<form
							className="space-y-6"
							onSubmit={(e) => handleSubmit(e, 'login')}
						>
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
										onChange={handleLoginChange}
										value={loginInput.email}
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
										onChange={handleLoginChange}
										value={loginInput.password}
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
