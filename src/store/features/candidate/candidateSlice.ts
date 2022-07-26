import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
	getCandidates,
	getTrelloBoard,
	saveTrelloBoard,
} from '../../../utils/firebase.utils';
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
		candidatesToReview: [],
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
export const saveBoardData = createAsyncThunk(
	'candidate/saveTrelloBoard',
	async (board: TrelloBoardData) => {
		await saveTrelloBoard(board);
	}
);
export const getBoardData = createAsyncThunk(
	'candidate/getTrelloBoard',
	async () => {
		const trelloBoardData = await getTrelloBoard();
		return JSON.stringify(trelloBoardData);
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
			.addCase(getAllCandidates.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllCandidates.fulfilled, (state, action) => {
				state.isLoading = false;
				state.candidates = JSON.parse(action.payload);
			})
			.addCase(getAllCandidates.rejected, (state) => {
				state.isLoading = false;
				state.message =
					'There was an error loading the candidates page, try again later';
			})
			// ----------- SAVE BOARD ------------------
			.addCase(saveBoardData.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(saveBoardData.fulfilled, (state) => {
				state.isLoading = false;
				state.message = 'Saved successfully';
			})
			.addCase(saveBoardData.rejected, (state) => {
				state.isLoading = false;
				state.message =
					'There was an error saving trello board, try again later';
			})
			// ------------- GET BOARD --------------------
			.addCase(getBoardData.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getBoardData.fulfilled, (state, action) => {
				state.isLoading = false;
				state.board = JSON.parse(action.payload);
			})
			.addCase(getBoardData.rejected, (state) => {
				state.isLoading = false;
				state.message =
					'There was an error getting trello board, try again later';
			});
	},
});

export const { addCandidateToBoard } = candidateSlice.actions;

export default candidateSlice.reducer;
