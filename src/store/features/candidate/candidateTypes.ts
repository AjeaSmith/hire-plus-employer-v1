export type CandidateData = {
	id: string;
	email: string;
	name: string;
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
type ItemData = {
	id: string;
	column: string;
	name: string;
	occupation: string;
	linkToProfile: string;
};
export type TrelloBoardData = {
	candidatesToReview: ItemData[];
	Interviewing: ItemData[];
	noResponse: ItemData[];
	toBeHired: ItemData[];
};
