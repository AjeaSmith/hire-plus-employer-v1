import { setEdittingView } from '../store/features/company/companySlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

interface CompanyProps {
	employeeId: string;
}
const Company: React.FC<CompanyProps> = ({ employeeId }) => {
	const dispatch = useAppDispatch();
	const { company, isEditting } = useAppSelector((state) => state.company);
	const { currentUser } = useAppSelector((state) => state.auth);

	const settingEditView = () => {
		dispatch(setEdittingView(!isEditting));
	};
	return (
		<>
			{company && (
				<>
					<section style={{ backgroundColor: '#252731' }} className="mb-3">
						<div className="container mx-auto py-5 px-5 md:px-0 text-right text-white flex justify-between">
							<div className="flex justify-center text-md text-slate-200">
								{company.isHiring ? (
									<p>We are hiring!</p>
								) : (
									<p>Not hiring at the moment</p>
								)}
							</div>
							{currentUser.uid !== employeeId ? null : (
								<button
									onClick={settingEditView}
									className="underline text-md text-indigo-500"
								>
									Edit Company
								</button>
							)}
						</div>
						<div className="md:px-12 lg:px-24 max-w-7xl relative items-center w-full px-5 py-5 mx-auto">
							<div className="mx-auto flex flex-col w-full max-w-lg mb-12 text-center">
								<p className="mb-5 font-medium text-2xl text-white">
									{company.companyName}
								</p>
								<img
									alt="testimonial"
									className="inline-block object-cover object-center w-20 h-20 mx-auto mb-8 rounded-full"
									src="https://picsum.photos/200"
								/>
								<div className="flex justify-center">
									{company.companyUrl ? (
										<a
											href={company.companyUrl}
											className="text-base leading-relaxed text-indigo-500 border-r-2 border-gray-500 pr-2"
										>
											Company Website
										</a>
									) : null}
									{company.companySize ? (
										<p className="text-base leading-relaxed font-color pl-2">
											Company size: {company.companySize}
										</p>
									) : null}
								</div>
							</div>
						</div>
					</section>
					<ul
						className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 text-white"
						id="tabs-tabFill"
						role="tablist"
					>
						<li className="nav-item flex-auto text-center" role="presentation">
							<a
								href="#tabs-homeFill"
								className="
								nav-link
								w-full
								block
								font-medium
								text-sm
								leading-tight
								uppercase
								border-x-0 border-t-0 border-b-2 border-transparent
								px-6
								py-3
								my-2
								hover:border-transparent hover:bg-transparent
								focus:border-transparent
								active
								"
								id="tabs-home-tabFill"
								data-bs-toggle="pill"
								data-bs-target="#tabs-homeFill"
								role="tab"
								aria-controls="tabs-homeFill"
								aria-selected="true"
							>
								About the company
							</a>
						</li>
						<li className="nav-item flex-auto text-center" role="presentation">
							<a
								href="#tabs-profileFill"
								className="
								nav-link
								w-full
								block
								font-medium
								text-sm
								leading-tight
								uppercase
								border-x-0 border-t-0 border-b-2 border-transparent
								px-6
								py-3
								my-2
								hover:border-transparent hover:bg-transparent
								focus:border-transparent
								"
								id="tabs-profile-tabFill"
								data-bs-toggle="pill"
								data-bs-target="#tabs-profileFill"
								role="tab"
								aria-controls="tabs-profileFill"
								aria-selected="false"
							>
								Jobs Posted
							</a>
						</li>
					</ul>
					<div className="tab-content font-color" id="tabs-tabContentFill">
						<div
							className="tab-pane fade show active w-full max-w-4xl"
							id="tabs-homeFill"
							role="tabpanel"
							aria-labelledby="tabs-home-tabFill"
						>
							{company.companyDescription ? (
								<p className="text-md px-10">{company.companyDescription}</p>
							) : (
								<p className="text-md px-10">Nothing to view, yet :)</p>
							)}
						</div>
						<div
							className="tab-pane fade"
							id="tabs-profileFill"
							role="tabpanel"
							aria-labelledby="tabs-profile-tabFill"
						>
							{company.jobs.length ? (
								<section className="text-gray-600 body-font">
									<div className="container py-5 mx-auto">
										<div className="flex flex-wrap -m-4">
											{company.jobs.map((job, index) => {
												return (
													<div className="p-4 md:w-1/2 w-full" key={index}>
														<div className="h-full secondary-bg-color p-8 rounded">
															<h2 className="mb-3 text-indigo-500">
																<a href={job.applyUrl}>APPLY FOR JOB</a>
															</h2>
															<p className="leading-relaxed mb-6 font-color">
																{job.description}
															</p>

															<span className="flex-grow flex flex-col">
																<span className="title-font font-medium text-white">
																	{job.position}
																</span>
																<div className="flex font-color">
																	<span className="text-sm">
																		{job.location.toUpperCase()}
																	</span>
																	<span className="text-sm mx-2">
																		{job.jobType.toUpperCase()}
																	</span>
																	<span className="text-sm">
																		${job.salary.toUpperCase()}
																	</span>
																</div>
															</span>
														</div>
													</div>
												);
											})}
										</div>
									</div>
								</section>
							) : (
								<p className="text-md px-10">No jobs posted </p>
							)}
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Company;
