import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/home/HomePage';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />}>
					{/* <Route index element={<JobsPage />} />
					<Route path="auth/employees" element={<AuthPage />}>
						<Route index element={<SignIn />} />
						<Route path="sign-up" element={<Signup />} />
						...
					</Route>
					<Route
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
