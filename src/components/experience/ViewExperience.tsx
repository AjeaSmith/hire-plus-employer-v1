import React from 'react';
import { truncateString } from '../../utils/truncateString';
import { ExperienceData } from './experienceType';

interface ViewExperienceProps {
	experienceData: ExperienceData;
}

const ViewExperience: React.FC<ViewExperienceProps> = ({ experienceData }) => {
	return (
		<li>
			<div className="flex flex-start items-center">
				<div className="bg-indigo-700 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
				<h4 className="text-slate-200 font-semibold text-xl -mt-2">
					{experienceData.position}
				</h4>
			</div>
			<div className="ml-6 mb-6 pb-6">
				<a
					href="#!"
					className="text-indigo-500 hover:text-indigo-700 focus:text-indigo-800 duration-300 transition ease-in-out text-sm"
				>
					{experienceData.date}
				</a>
				<p className="font-color mt-2 mb-2 w-3/4">
					{truncateString(experienceData.positionSummary, 1000)}
				</p>
			</div>
		</li>
	);
};

export default ViewExperience;
