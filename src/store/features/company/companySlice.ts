import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface userState {}
const initialState: userState = {};

const companySlice = createSlice({
	name: 'company',
	initialState,
	reducers: {
		// sync actions
	},
	extraReducers: (builder) => {},
});

export const {} = companySlice.actions;

export default companySlice.reducer;
