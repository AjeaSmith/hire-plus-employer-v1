import { ChangeEvent, FormEvent, useState } from 'react';
import useReduxAuth from '../useReduxAuth/useReduxAuth';

const useHandleForm = () => {
	const defaultFormFields = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	};
	const { dispatchSignUpUser } = useReduxAuth();
	const [formFields, setFormFields] = useState(defaultFormFields);
	const [message, setMessage] = useState('');

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (formFields.password !== formFields.confirmPassword) {
			return setMessage(`Passwords don't match`);
		}
		dispatchSignUpUser(formFields);
		resetFormFields();
	};
	return {
		resetFormFields,
		handleChange,
		formFields,
		handleSubmit,
		message,
	};
};

export default useHandleForm;
