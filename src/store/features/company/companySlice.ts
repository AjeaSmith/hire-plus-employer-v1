import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCompany } from '../../../utils/firebase.utils';
import { CompanyData } from './companyTypes';

interface companyState {
	company: CompanyData;
	isLoading: boolean;
	isEditting: boolean;
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
		companyType: '',
		jobs: [],
	},
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
const companySlice = createSlice({
	name: 'company',
	initialState,
	reducers: {
		setEdittingView(state, action) {
			state.isEditting = action.payload;
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
					'There was an error fetching company page, try again later';
			});
	},
});

export const { setEdittingView } = companySlice.actions;

export default companySlice.reducer;
