import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './auth/sign-up/SignUp.component';
import PrivateRoute from './components/private/PrivateRoute.component';
import SignIn from './auth/sign-in/Signin.component';
import AuthPage from './routes/auth/AuthPage';
import CandidatesPage from './routes/candidates/CandidatesPage';
import CompanyPage from './routes/company/CompanyPage';
import HomePage from './routes/home/HomePage';
import NoMatch from './routes/noMatch/NoMatch';
import { setSignedIn } from './store/features/auth/authSlice';
import { useAppDispatch } from './store/hooks';
import { onAuthStateChangedListener } from './utils/firebase.utils';

function App() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener(async (user) => {
			if (user) {
				const { displayName, uid } = user;
				console.log(user);
				dispatch(
					setSignedIn({ signedIn: true, currentUser: { displayName, uid } })
				);
			} else {
				dispatch(setSignedIn({ signedIn: false, currentUser: {} }));
			}
		});
		// unsubscribe when the component unmounts
		return unsubscribe;
	}, []);
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />}>
					<Route index element={<CandidatesPage />} />
					<Route path="auth/employers" element={<AuthPage />}>
						<Route index element={<SignIn />} />
						<Route path="sign-up" element={<Signup />} />
					</Route>
					<Route path="company/:id/:userId" element={<CompanyPage />} />
				</Route>
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</>
	);
}

export default App;
