import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCandidates } from '../../../utils/firebase.utils';
import { CandidateData } from './candidateTypes';

interface candidateState {
	candidates: CandidateData[];
	isLoading: boolean;
	message: string;
}
const initialState: candidateState = {
	candidates: [],
	isLoading: false,
	message: '',
};
export const getAllCandidates = createAsyncThunk(
	'company/getCandidates',
	async () => {
		const candidates = await getCandidates();
		return JSON.stringify(candidates);
	}
);

const candidateSlice = createSlice({
	name: 'company',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllCandidates.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(getAllCandidates.fulfilled, (state, action) => {
				state.isLoading = false;
				state.candidates = JSON.parse(action.payload);
			})
			.addCase(getAllCandidates.rejected, (state, action) => {
				state.isLoading = false;
				state.message =
					'There was an error loading the candidates page, try again later';
			});
	},
});

export const {} = candidateSlice.actions;

export default candidateSlice.reducer;
