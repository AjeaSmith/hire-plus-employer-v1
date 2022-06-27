import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import BeatLoader from 'react-spinners/BeatLoader';
type PrivateProps = {
	children: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateProps> = ({ children }) => {
	const { isSignedIn } = useAppSelector((state) => state.auth);

	if (!isSignedIn)
		return (
			<div className="text-center p-20">
				<BeatLoader color="#ffffff" />
			</div>
		);

	if (isSignedIn) {
		return <>{children}</>;
	}
	return <Navigate to="/auth/employees" />;
};

export default PrivateRoute;
