import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCandidates } from '../../../utils/firebase.utils';
import { CandidateData, TrelloBoardData } from './candidateTypes';

interface candidateState {
	candidates: CandidateData[];
	board: TrelloBoardData;
	isLoading: boolean;
	message: string;
}
const initialState: candidateState = {
	candidates: [],
	board: {
		candidatesToReview: [
			{
				id: '1',
				column: 'candidatesToReview',
				name: 'James Steward',
				occupation: 'Web Developer',
			},
			{
				id: '2',
				column: 'candidatesToReview',
				name: 'Chris Michaels',
				occupation: 'Front-end Developer',
			},
			{
				id: '3',
				column: 'candidatesToReview',
				name: 'Tom Soho',
				occupation: 'Software Engineer',
			},
		],
		Interviewing: [],
		noResponse: [],
		toBeHired: [],
	},
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

const candidateSlice = createSlice({
	name: 'candidate',
	initialState,
	reducers: {
		addCandidateToBoard(state, action) {
			state.board = action.payload;
		},
	},
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

export const { addCandidateToBoard } = candidateSlice.actions;

export default candidateSlice.reducer;
