import { useAppSelector } from '../../store/hooks';
import { JobData } from './types';

interface JobProps {
	job: JobData;
	itemIndex: number;
	removeItem: (id: number) => void;
}

const Job: React.FC<JobProps> = ({ job, itemIndex, removeItem }) => {
	const { isEditting } = useAppSelector((state) => state.company);

	return (
		<div className="p-4 w-full md:w-1/3">
			{isEditting ? (
				<button
					onClick={() => removeItem(itemIndex)}
					className="mb-2 text-red-500"
				>
					REMOVE
				</button>
			) : null}
			<div className="h-full secondary-bg-color bg-opacity-75 px-8 pt-10 pb-24 rounded-lg overflow-hidden text-center relative">
				<h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-2">
					{job.datePosted}
				</h2>
				<h1 className="title-font sm:text-2xl text-xl font-medium mb-3">
					{job.position}
				</h1>
				<p className="font-color text-xl">
					{job.jobType} | {job.location} | ${job.salary}
				</p>
				<div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4 mb-5">
					<span className="text-gray-400 inline-flex items-center leading-none text-sm">
						<a
							className="text-indigo-500 inline-flex items-center"
							href={job.applyUrl}
						>
							APPLY ON WEBSITE
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

export default Job;
