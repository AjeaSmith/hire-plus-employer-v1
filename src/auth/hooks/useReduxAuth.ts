import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
	signInWithEmailAndPassword,
	signUpUserEmailAndPassword,
} from '../../store/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { FormFields, LoginFields } from '../types';

const useReduxAuth = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { isLoading } = useAppSelector((state) => state.auth);
	const [message, setmessage] = useState<string>('');

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
	const dispatchSignInUser = (loginFields: LoginFields) => {
		dispatch(signInWithEmailAndPassword(loginFields))
			.unwrap()
			.then(() => {
				navigate('/');
			})
			.catch((error) => {
				setmessage('User does not exist in the database');
				console.log(error);
			});
		setmessage('');
	};

	return {
		dispatchSignUpUser,
		dispatchSignInUser,
		isLoading,
		message,
	};
};

export default useReduxAuth;
