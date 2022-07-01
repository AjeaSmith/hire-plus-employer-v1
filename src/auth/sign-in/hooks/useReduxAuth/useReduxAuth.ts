import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
	resetError,
	signInWithEmailAndPassword,
	signInWithGoogle,
} from '../../../../store/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { FormFields } from '../../types';

const useReduxAuth = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { isLoading } = useAppSelector((state) => state.auth);
	const [message, setmessage] = useState<string>('');

	const dispatchSignInUser = ({ email, password }: FormFields) => {
		dispatch(
			signInWithEmailAndPassword({
				email,
				password,
			})
		)
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
	const dispatchGoogleSignIn = async () => {
		dispatch(signInWithGoogle())
			.unwrap()
			.then(() => {
				// resetFormFields();
				navigate('/');
			})
			.catch((error) => {
				dispatch(resetError());
			});
	};
	return { dispatchSignInUser, dispatchGoogleSignIn, isLoading, message };
};

export default useReduxAuth;
