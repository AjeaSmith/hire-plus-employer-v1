import { Outlet, useParams } from 'react-router';
import Navigation from '../../components/navigation/Navigation.component';

const HomePage = () => {
	return (
		<>
			<Navigation />
			<Outlet />
		</>
	);
};

export default HomePage;
