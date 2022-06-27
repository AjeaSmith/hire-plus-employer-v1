import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/sign-in/SignIn.component';
import SignUp from './components/sign-up/SignUp.component';
import AuthPage from './routes/auth/AuthPage';
import CandidatesPage from './routes/candidates/CandidatesPage';
import HomePage from './routes/home/HomePage';
import { setSignedIn } from './store/features/auth/authSlice';
import { useAppDispatch } from './store/hooks';
import { getCurrentUser } from './utils/firebase.utils';

function App() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		const getUser = async () => {
			const user = await getCurrentUser();
			if (user) {
				const { displayName, uid } = user;
				dispatch(
					setSignedIn({ signedIn: true, currentUser: { displayName, uid } })
				);
			} else {
				dispatch(setSignedIn({ signedIn: false, currentUser: {} }));
			}
		};
		getUser();
	}, []);
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />}>
					<Route index element={<CandidatesPage />} />
					<Route path="auth/employers" element={<AuthPage />}>
						<Route index element={<SignIn />} />
						<Route path="sign-up" element={<SignUp />} />
					</Route>
					{/* <Route
						path="user/profile/:id"
						element={
							<PrivateRoute>
								<ProfilePage />
							</PrivateRoute>
						}
					/> */}
				</Route>
				{/* <Route path="*" element={<NoMatch />} /> */}
			</Routes>
		</>
	);
}

export default App;
