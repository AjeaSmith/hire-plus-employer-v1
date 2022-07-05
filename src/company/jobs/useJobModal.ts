import { ChangeEvent, useState } from 'react';
import {
	setJobs,
	setJobsDB,
	setModal,
} from '../../store/features/company/companySlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { JobData } from './types';

const defaultFields = {
	position: '',
	location: '',
	salary: '',
	datePosted: '',
	jobType: '',
	applyUrl: '',
	description: '',
	companyName: '',
};
const useJobModal = () => {
	const dispatch = useAppDispatch();
	const { company } = useAppSelector((state) => state.company);

	const [jobFields, setJobFields] = useState<JobData>(defaultFields);

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setJobFields({ ...jobFields, [name]: value });
	};
	const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const { value } = e.target;
		setJobFields({ ...jobFields, description: value });
	};
	const resetFormFields = () => {
		setJobFields(defaultFields);
	};
	const closeModal = () => {
		dispatch(setModal(false));
	};
	const addJobs = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(
			setJobsDB({
				position: jobFields.position,
				location: jobFields.location,
				salary: jobFields.salary,
				datePosted: jobFields.datePosted,
				jobType: jobFields.jobType,
				applyUrl: jobFields.applyUrl,
				description: jobFields.description,
				companyName: jobFields.companyName,
			})
		)
			.unwrap()
			.then(() => {
				dispatch(
					setJobs([
						{
							position: jobFields.position,
							location: jobFields.location,
							salary: jobFields.salary,
							datePosted: jobFields.datePosted,
							jobType: jobFields.jobType,
							applyUrl: jobFields.applyUrl,
							description: jobFields.description,
							companyName: jobFields.companyName,
						},
						...company.jobs,
					])
				);
			});
		resetFormFields();
		closeModal();
	};
	return { addJobs, onTextareaChange, onInputChange, jobFields, closeModal };
};

export default useJobModal;
