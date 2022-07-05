import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import {
	setEdittingView,
	setJobsDB,
	setModal,
	updateCompanyById,
} from '../../store/features/company/companySlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { EditFields } from './types';

const useEditForm = () => {
	const { company, isEditting } = useAppSelector((state) => state.company);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	// setup form / validation
	const [formFields, setFormFields] = useState<EditFields>({
		companyDescription: company.companyDescription
			? company.companyDescription
			: '',
		companySize: company.companySize ? company.companySize : '',
		companyUrl: company.companyUrl ? company.companyUrl : '',
	});
	const [isHiring, setIsHiring] = useState<boolean>(company.isHiring);

	// handle input changes
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormFields({
			...formFields,
			[name]: value,
			[formFields.companyDescription]: value,
		});
		console.log(name, value);
	};
	const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setFormFields({
			...formFields,
			[formFields.companyDescription]: e.target.value,
		});
	};

	// toggle editting view / hiring toggle
	const toggleHireCompany = () => {
		setIsHiring(!isHiring);
	};
	const settingEditView = () => {
		dispatch(setEdittingView(!isEditting));
	};

	const openModal = () => {
		dispatch(setModal(true));
	};
	// handle update company
	const handleUpdateCompany = () => {
		dispatch(
			updateCompanyById({
				id: company.id,
				...formFields,
				isHiring,
				jobs: company.jobs,
			})
		);
		dispatch(setEdittingView(false));
		navigate('/');
	};
	return {
		formFields,
		isHiring,
		handleInputChange,
		handleTextareaChange,
		toggleHireCompany,
		settingEditView,
		handleUpdateCompany,
		openModal,
	};
};

export default useEditForm;
