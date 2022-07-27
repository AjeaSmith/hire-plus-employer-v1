import { useEffect } from 'react';
import { useParams } from 'react-router';
import { BeatLoader } from 'react-spinners';
import ViewExperience from '../../components/experience/ViewExperience';
import ViewProject from '../../components/projects/ViewProject';
import { getAllCandidates } from '../../store/features/candidate/candidateSlice';
import { CandidateData } from '../../store/features/candidate/candidateTypes';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import useManageCandidate from '../manage-candidates/useTrelloBoard';

const ViewCandidate = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const { addNewCandidateToBoard } = useManageCandidate();
	const { isLoading, candidates } = useAppSelector((state) => state.candidate);
	useEffect(() => {
		dispatch(getAllCandidates());
	}, [dispatch]);
	const RenderCandidate = () => {
		const candidateObj = candidates.length
			? candidates.find((val) => val.id === id)
			: ({} as CandidateData);
		return (
			<>
				<section style={{ backgroundColor: '#252731' }}>
					<div className="container mx-auto py-5 px-5 md:px-0 text-right text-white flex justify-between">
						<div className="flex justify-center text-md text-slate-200">
							{candidateObj.isForHire ? (
								<p>Looking for work</p>
							) : (
								<p>Not currently looking for work</p>
							)}
						</div>
						<div className="flex justify-center text-md text-slate-200">
							<button
								type="button"
								className="
    								px-6
    								py-2.5
    								bg-indigo-600
    								text-white
    								font-medium
    								text-xs
    								leading-tight
    								uppercase
    								rounded
    								shadow-md
    								hover:bg-indigo-700 hover:shadow-lg
    								focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0
    								active:bg-blue-800 active:shadow-lg
    								transition
    								duration-150
    								ease-in-out
  									"
								onClick={() => addNewCandidateToBoard(candidateObj.name)}
							>
								Add to your board
							</button>
						</div>
					</div>
					<div className="md:px-12 lg:px-24 max-w-7xl relative items-center w-full px-5 py-5 mx-auto">
						<div className="mx-auto flex flex-col w-full max-w-lg mb-12 text-center">
							<p className="mb-5 font-medium text-2xl text-white">
								{candidateObj.name}
							</p>
							<img
								alt="testimonial"
								className="inline-block object-cover object-center w-20 h-20 mx-auto mb-8 rounded-full"
								src="https://picsum.photos/200"
							/>
							<div className="flex justify-center">
								{candidateObj.headline ? (
									<p className="text-base leading-relaxed font-color pr-2">
										{candidateObj.headline}
									</p>
								) : null}
								{candidateObj.websiteURL ? (
									<>
										<a
											href={candidateObj.websiteURL}
											className="text-base leading-relaxed text-indigo-500 border-l-2 border-gray-500 pl-2"
										>
											Live Website
										</a>
									</>
								) : null}
							</div>
						</div>
					</div>
				</section>
				<div className="divide-y divide-gray-700" key={candidateObj.id}>
					<section className="text-gray-600 body-font mt-2">
						<div className="container px-10 py-20 mx-auto">
							<div className="flex flex-col w-full mx-auto">
								<div className="w-full mx-auto">
									<h2 className="sm:text-3xl text-2xl my-5 font-bold">
										About Me
									</h2>
									<p className="lg:w-3/4 about-me font-color">
										{candidateObj.summary
											? candidateObj.summary
											: 'No info to show'}
									</p>
								</div>
							</div>
						</div>
					</section>
					<section className="text-gray-600 body-font overflow-hidden">
						<div className="container px-10 py-20 mx-auto">
							<div className="flex flex-col w-full mx-auto">
								<div className="w-full mx-auto">
									<h2 className="sm:text-3xl text-2xl mb-5 font-bold">
										Skills
									</h2>
									{candidateObj.skills?.length ? (
										<ul className="flex flex-wrap">
											{candidateObj.skills.map((skill, id) => {
												return (
													<li
														className="mr-2 my-2 text-white px-4 py-2 rounded-3xl bg-indigo-700 cursor-pointer["
														key={id}
													>
														{skill}
													</li>
												);
											})}
										</ul>
									) : (
										<p className="font-color">No skills to show</p>
									)}
								</div>
							</div>
						</div>
					</section>
					<section className="text-gray-600 body-font overflow-hidden">
						<div className="container px-10 py-20 mx-auto">
							<div className="-my-8 mx-auto">
								<h2 className="text-3xl my-8 mb-5 font-bold">Experience</h2>
								{!candidateObj.experience?.length ? (
									<p className="font-color">No experiences to show</p>
								) : (
									<ol className="border-l-2 border-indigo-700 mt-10">
										{candidateObj.experience.map((exp, index) => {
											return (
												<ViewExperience experienceData={exp} key={index} />
											);
										})}
									</ol>
								)}
							</div>
						</div>
					</section>

					<section className="text-gray-600 body-font">
						<div className="container px-10 py-24 mx-auto">
							<h2 className="sm:text-3xl text-2xl font-bold title-font mb-5">
								Projects
							</h2>
							{!candidateObj.projects?.length ? (
								<p className="font-color">No projects to show</p>
							) : (
								<div className="container py-5 mx-auto">
									<div className="flex flex-wrap -m-4">
										{candidateObj.projects.map((proj, index) => {
											return <ViewProject project={proj} key={index} />;
										})}
									</div>
								</div>
							)}
						</div>
					</section>
				</div>
			</>
		);
	};
	return (
		<div>
			{isLoading ? (
				<div className="text-center z-index mt-20">
					<BeatLoader color={'white'} loading={isLoading} />
				</div>
			) : (
				<RenderCandidate />
			)}
		</div>
	);
};

export default ViewCandidate;
