import { Link } from 'react-router-dom';
import globeSVG from '../assets/globe.svg';
import { CandidateData } from '../store/features/candidate/candidateTypes';
import { useAppSelector } from '../store/hooks';
import { truncateString } from '../utils/truncateString';

interface CandidatesProps {
	candidate: CandidateData;
}
const Candidates: React.FC<CandidatesProps> = ({ candidate }) => {
	const { isSignedIn } = useAppSelector((state) => state.auth);
	return (
		<div className="p-4 lg:w-1/2">
			<div className="h-full flex sm:flex-row flex-col sm:justify-start items-center justify-center text-center sm:text-left">
				<img
					alt="team"
					className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
					src="https://picsum.photos/200"
				/>
				<div className="flex-grow sm:pl-8">
					<h2 className="title-font font-medium text-lg text-indigo-500">
						<Link to={`/view_candidate/${candidate.id}`}>{candidate.name}</Link>
					</h2>
					{candidate.headline ? (
						<h3 className="text-slate-500 mb-3">{candidate.headline}</h3>
					) : null}
					{candidate.summary ? (
						<p className="mb-4 font-color">
							{truncateString(candidate.summary, 100)}
						</p>
					) : null}

					{candidate.websiteURL ? (
						<span className="inline-flex">
							<a href={candidate.websiteURL} className="text-gray-200 mr-3">
								<img src={globeSVG} alt="globe" className="w-5" />
							</a>
							{isSignedIn ? (
								<span className="inline-flex text-indigo-500">
									Add To Board
								</span>
							) : null}
						</span>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Candidates;
