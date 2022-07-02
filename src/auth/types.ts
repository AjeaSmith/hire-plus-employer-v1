export interface FormFields {
	displayName: string;
	email: string;
	password: string;
	confirmPassword?: string;
}
export interface LoginFields {
	email: string;
	password: string;
}
export type Props = {
	loginFields?: LoginFields;
	registerFields?: FormFields;
};
