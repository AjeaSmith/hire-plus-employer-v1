import { useNavigate } from 'react-router';
import { signUpUserEmailAndPassword } from '../../store/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { FormFields } from './types';

const useReduxAuth = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { isLoading } = useAppSelector((state) => state.auth);

	const dispatchSignUpUser = ({ displayName, email, password }: FormFields) => {
		dispatch(
			signUpUserEmailAndPassword({
				email,
				password,
				displayName,
			})
		)
			.unwrap()
			.then(() => {
				navigate('/');
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return { dispatchSignUpUser, isLoading };
};

export default useReduxAuth;
