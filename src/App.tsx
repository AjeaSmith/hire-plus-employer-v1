import { Routes, Route } from 'react-router-dom';
import SignIn from './components/sign-in/SignIn.component';
import SignUp from './components/sign-up/SignUp.component';
import AuthPage from './routes/auth/AuthPage';
import CandidatesPage from './routes/candidates/CandidatesPage';
import HomePage from './routes/home/HomePage';

function App() {
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
