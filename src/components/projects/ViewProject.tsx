import React from 'react';
import { ProjectData } from './projectType';

interface ViewProjectProps {
	project: ProjectData;
}

const ViewProject: React.FC<ViewProjectProps> = ({ project }) => {
	return (
		<div className="p-4 w-full md:w-1/3">
			<div className="h-full secondary-bg-color bg-opacity-75 px-8 pt-10 pb-24 rounded-lg overflow-hidden text-center relative">
				<h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-2">
					{project.date}
				</h2>
				<h1 className="title-font sm:text-2xl text-xl font-medium mb-3">
					{project.title}
				</h1>
				<p className="leading-relaxed mb-3 font-color">{project.summary}</p>

				<div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4 mb-5">
					<span className="text-indigo-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-600">
						VIEW CODE
						<svg
							className="w-4 h-4 ml-2"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M5 12h14"></path>
							<path d="M12 5l7 7-7 7"></path>
						</svg>
					</span>
					<span className="text-gray-400 inline-flex items-center leading-none text-sm">
						<a className="text-indigo-500 inline-flex items-center">
							VIEW LIVE
							<svg
								className="w-4 h-4 ml-2"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M5 12h14"></path>
								<path d="M12 5l7 7-7 7"></path>
							</svg>
						</a>
					</span>
				</div>
			</div>
		</div>
	);
};

export default ViewProject;
