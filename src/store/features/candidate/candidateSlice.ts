import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCandidates, getCandidate } from '../../../utils/firebase.utils';
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
	'candidate/getCandidates',
	async () => {
		const candidates = await getCandidates();
		return JSON.stringify(candidates);
	}
);
export const getOneCandidate = createAsyncThunk(
	'candidate/getOneCandidate',
	async (id: string) => {
		const candidate = await getCandidate(id);
		const [candidateObj] = candidate;
		return JSON.stringify(candidateObj);
	}
);

const candidateSlice = createSlice({
	name: 'candidate',
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
			})
			.addCase(getOneCandidate.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(getOneCandidate.fulfilled, (state, action) => {
				state.isLoading = false;
				state.candidates = JSON.parse(action.payload);
			})
			.addCase(getOneCandidate.rejected, (state, action) => {
				state.isLoading = false;
				state.message =
					'There was an error loading the candidate page, try again later';
			});
	},
});

export const {} = candidateSlice.actions;

export default candidateSlice.reducer;
