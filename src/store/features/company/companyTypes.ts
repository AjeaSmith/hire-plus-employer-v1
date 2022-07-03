export type CompanyData = {
	id: string;
	companyName: string;
	companyDescription: string;
	companyUrl: string;
	email: string;
	isHiring: boolean;
	companySize: string;
	jobs: [];
};

export type UpdateCompany = {
	id: string;
	companyDescription: string;
	companyUrl: string;
	isHiring: boolean;
	companySize: string;
	jobs: [];
};
