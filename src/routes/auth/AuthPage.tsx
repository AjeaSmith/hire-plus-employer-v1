import React from 'react';
import { Outlet } from 'react-router';

interface AuthPageProps {}

const AuthPage: React.FC<AuthPageProps> = () => {
	return <Outlet />;
};

export default AuthPage;
