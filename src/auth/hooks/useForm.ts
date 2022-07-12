import { ChangeEvent, FormEvent, useState } from 'react';
import { Props } from '../types';
import useReduxAuth from './useReduxAuth';

const useForm = (fields: Props) => {
	const { dispatchSignUpUser, dispatchSignInUser } = useReduxAuth();
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
		console.log(name, value);
		setLoginInput({ ...loginInput, [name]: value });
	};

	const handleRegisterChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		console.log(name, value);
		setRegisterInput({ ...registerInput, [name]: value });
	};

	const handleSubmit = async (
		event: FormEvent<HTMLFormElement>,
		form: string
	) => {
		event.preventDefault();
		if (form === 'login') {
			dispatchSignInUser(loginInput);
			resetFormFields('login');
		} else if (form === 'register') {
			if (registerInput.password !== registerInput.confirmPassword) {
				return setMessage(`Passwords don't match`);
			}
			dispatchSignUpUser(registerInput);
			resetFormFields('register');
		}
		return;
	};

	return {
		resetFormFields,
		handleLoginChange,
		handleRegisterChange,
		loginInput,
		registerInput,
		handleSubmit,
		message,
	};
};

export default useForm;
