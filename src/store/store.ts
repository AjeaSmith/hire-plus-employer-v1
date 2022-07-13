import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import companyReducer from './features/company/companySlice';
import candidateReducer from './features/candidate/candidateSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		company: companyReducer,
		candidate: candidateReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {users: UsersState}
export type AppDispatch = typeof store.dispatch;
