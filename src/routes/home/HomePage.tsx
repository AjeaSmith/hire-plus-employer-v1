import React from 'react';
import { Outlet } from 'react-router';
import Navigation from '../../components/navigation/Navigation.component';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
	return (
		<>
			<Navigation />
			<Outlet />
		</>
	);
};

export default HomePage;
