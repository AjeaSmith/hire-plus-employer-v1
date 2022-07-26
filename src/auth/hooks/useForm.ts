import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import {
	signInWithEmailAndPassword,
	signUpUserEmailAndPassword,
} from '../../store/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Props } from '../types';

const useForm = (fields: Props) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { isLoading } = useAppSelector((state) => state.auth);

	const [loginInput, setLoginInput] = useState(fields.loginFields);
	const [registerInput, setRegisterInput] = useState(fields.registerFields);

	const [message, setMessage] = useState('');

	const resetFormFields = (form: string) => {
		if (form === 'login') return setLoginInput(fields.loginFields);
		if (form === 'register') return setRegisterInput(fields.registerFields);
		return;
	};

	const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setLoginInput({ ...loginInput, [name]: value });
	};

	const handleRegisterChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setRegisterInput({ ...registerInput, [name]: value });
	};

	const handleSubmit = async (
		event: FormEvent<HTMLFormElement>,
		form: string
	) => {
		event.preventDefault();
		if (form === 'login') {
			dispatch(signInWithEmailAndPassword(loginInput))
				.unwrap()
				.then(() => {
					navigate('/');
					resetFormFields('login');
				})
				.catch((error) => {
					setMessage('User does not exist in the database');
					console.log(error);
				});
		} else if (form === 'register') {
			if (registerInput.password !== registerInput.confirmPassword) {
				return setMessage(`Passwords don't match`);
			} else {
				dispatch(signUpUserEmailAndPassword(registerInput))
					.unwrap()
					.then(() => {
						navigate('/');
						resetFormFields('register');
					})
					.catch((error) => {
						console.log(error);
					});
			}
		}
		return;
	};

	return {
		resetFormFields,
		handleLoginChange,
		handleRegisterChange,
		loginInput,
		isLoading,
		registerInput,
		handleSubmit,
		message,
	};
};

export default useForm;
