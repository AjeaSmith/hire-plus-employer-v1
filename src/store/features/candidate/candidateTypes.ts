export type CandidateData = {
	id: string;
	email: string;
	createdAt: number;
	headline: string;
	isForHire: boolean;
	websiteURL: string;
	skills: string[];
	summary: string;
	projects: ProjectData[];
	experience: ExperienceData[];
};
type ExperienceData = {
	date: string;
	position: string;
	positionSummary: string;
};
type ProjectData = {
	date: string;
	title: string;
	summary: string;
	github: string;
	projectUrl: string;
};