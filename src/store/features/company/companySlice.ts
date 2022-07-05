import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { JobData } from '../../../company/jobs/types';
import {
	getCompany,
	setCompanyJobs,
	updateCompany,
} from '../../../utils/firebase.utils';
import { CompanyData, Jobs, UpdateCompany } from './companyTypes';

interface companyState {
	company: CompanyData;
	isLoading: boolean;
	isEditting: boolean;
	isModalOpen: boolean;
	message: string;
}
const initialState: companyState = {
	company: {
		id: '',
		companyName: '',
		companyDescription: '',
		companyUrl: '',
		email: '',
		isHiring: false,
		companySize: '',
		jobs: [],
	},
	isModalOpen: false,
	isLoading: false,
	isEditting: false,
	message: '',
};

export const getCompanyById = createAsyncThunk(
	'company/getCompany',
	async (id: string) => {
		const company = await getCompany(id);
		const [companyObj] = company;
		return JSON.stringify(companyObj);
	}
);
export const updateCompanyById = createAsyncThunk(
	'company/updateCompany',
	async (data: UpdateCompany) => {
		await updateCompany(data);
	}
);
export const setJobsDB = createAsyncThunk(
	'company/setJobsDB',
	async (data: Jobs) => {
		await setCompanyJobs(data);
	}
);

const companySlice = createSlice({
	name: 'company',
	initialState,
	reducers: {
		setEdittingView(state, action) {
			state.isEditting = action.payload;
		},
		setJobs(state, action) {
			state.company.jobs = action.payload;
		},
		setModal(state, action) {
			state.isModalOpen = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCompanyById.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(getCompanyById.fulfilled, (state, action) => {
				state.isLoading = false;
				state.company = JSON.parse(action.payload);
			})
			.addCase(getCompanyById.rejected, (state, action) => {
				state.isLoading = false;
				state.message =
					'There was an error loading the company page, try again later';
			})
			// --------- SET JOBS ASYNC ------------
			.addCase(setJobsDB.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(setJobsDB.fulfilled, (state, action) => {
				state.isLoading = false;
				console.log('Jobs added to DB');
			})
			.addCase(setJobsDB.rejected, (state, action) => {
				state.isLoading = false;
				console.log('failed to post jobs', action.error);
			});
	},
});

export const { setEdittingView, setJobs, setModal } = companySlice.actions;

export default companySlice.reducer;
