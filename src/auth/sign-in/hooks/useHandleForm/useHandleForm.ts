import { ChangeEvent, FormEvent, useState } from 'react';
import useReduxAuth from '../useReduxAuth/useReduxAuth';

const useHandleForm = () => {
	const defaultFormFields = {
		email: '',
		password: '',
	};
	const { dispatchSignInUser } = useReduxAuth();
	const [formFields, setFormFields] = useState(defaultFormFields);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatchSignInUser(formFields);
		resetFormFields();
	};
	return {
		resetFormFields,
		handleChange,
		formFields,
		handleSubmit,
	};
};

export default useHandleForm;
