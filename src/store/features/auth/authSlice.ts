import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
	logoutUser,
	signInEmailAndPassword,
	signInWithGooglePopup,
	signUpEmailAndPassword,
} from '../../../utils/firebase.utils';

import { SignUpFields, LoginFields } from './authTypes';

interface userState {
	isSignedIn: boolean;
	currentUser: { uid: string; displayName: string };
	isLoading: boolean;
	signUpError: string;
	signInError: string;
}
const initialState: userState = {
	isSignedIn: false,
	currentUser: { uid: '', displayName: '' },
	isLoading: false,
	signUpError: '',
	signInError: '',
};

// async actions

// ------- USER ACTIONS --------------------------------
export const signInWithGoogle = createAsyncThunk(
	'user/signInWithGoogle',
	async () => {
		await signInWithGooglePopup();
	}
);
export const signInWithEmailAndPassword = createAsyncThunk(
	'user/signInEmailAndPassword',
	async (formFields: LoginFields) => {
		const { user } = await signInEmailAndPassword(
			formFields.email,
			formFields.password
		);

		return JSON.stringify(user);
	}
);
export const signUpUserEmailAndPassword = createAsyncThunk(
	'user/signUpUserEmailAndPassword',
	async (formFields: SignUpFields) => {
		const user = await signUpEmailAndPassword(formFields);
		return JSON.stringify(user);
	}
);
export const signoutUser = createAsyncThunk('user/signoutUser', async () => {
	return await logoutUser();
});

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		// sync actions
		setSignedIn(state, action) {
			state.isSignedIn = action.payload.signedIn;
			state.currentUser = action.payload.currentUser;
		},
		setSignupError(state, action) {
			state.signUpError = action.payload;
		},
		resetError(state) {
			state.signInError = '';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(signInWithGoogle.rejected, (_, action) => {
				console.log('something went wrong with google sign-in', action.error);
			})
			// ---------------------------------------- SIGN IN ACTIONS ---------------------------------
			.addCase(signInWithEmailAndPassword.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(signInWithEmailAndPassword.fulfilled, (state, action) => {
				const { uid, displayName } = JSON.parse(action.payload);
				state.isLoading = false;
				state.currentUser = { uid, displayName };
			})
			.addCase(signInWithEmailAndPassword.rejected, (state) => {
				state.isLoading = false;
				state.signInError = 'User does not exist in the database';
			})
			// --------------------------------------- SIGN UP ACTIONS ---------------------------------
			.addCase(signUpUserEmailAndPassword.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(signUpUserEmailAndPassword.fulfilled, (state, action) => {
				const { displayName, uid } = JSON.parse(action.payload);
				state.isLoading = false;
				state.currentUser = { uid, displayName };
			})
			.addCase(signUpUserEmailAndPassword.rejected, (state, { error }) => {
				state.isLoading = false;
				state.signUpError = error.code;
			})
			// --------------------------------------- SIGN OUT ACTIONS ---------------------------------
			.addCase(signoutUser.fulfilled, (state) => {
				state.isLoading = false;
				state.isSignedIn = false;
			});
	},
});

export const { resetError, setSignupError, setSignedIn } = userSlice.actions;

export default userSlice.reducer;
