import { setEdittingView } from '../store/features/company/companySlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const Company = () => {
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
									<p>Our company is not hiring at the moment</p>
								)}
							</div>
							{currentUser.uid !== company.id ? null : (
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
									{currentUser.displayName}
								</p>
								<img
									alt="testimonial"
									className="inline-block object-cover object-center w-20 h-20 mx-auto mb-8 rounded-full"
									src="https://picsum.photos/200"
								/>
								<div className="flex justify-center">
									{company.companyUrl ? (
										<>
											<a
												href={company.companyUrl}
												className="text-base leading-relaxed text-indigo-500 border-l-2 border-gray-500 pl-2"
											>
												Company Website
											</a>
										</>
									) : null}
									{company.companySize ? (
										<p className="text-base leading-relaxed font-color pr-2">
											{company.companySize}
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
							<p className="text-md px-10">{company.companyDescription}</p>
						</div>
						<div
							className="tab-pane fade"
							id="tabs-profileFill"
							role="tabpanel"
							aria-labelledby="tabs-profile-tabFill"
						>
							{company.jobs.length > 1 ? (
								company.jobs.map((job) => {
									return <div>{job}</div>;
								})
							) : (
								<p className="text-md">No Jobs posted </p>
							)}
						</div>
					</div>
					{/* <div className="divide-y divide-gray-700" key={company.id}>
						<section className="text-gray-600 body-font mt-2">
							<div className="container px-10 py-20 mx-auto">
								<div className="flex flex-col w-full mx-auto">
									<div className="w-full mx-auto">
										<h2 className="sm:text-3xl text-2xl my-5 font-bold">
											About The Company
										</h2>
										<p className="lg:w-3/4 about-me font-color">
											{profile.summary ? profile.summary : 'No info to show'}
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
										{company. ? (
											<ul className="flex flex-wrap">
												{profile.skills.map((skill, id) => {
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
									{profile.experience.length ? (
										<ol className="border-l-2 border-indigo-700 mt-10">
											{profile.experience.map((exp, index) => {
												return (
													<Experience
														experienceData={exp}
														key={index}
														itemIndex={index}
													/>
												);
											})}
										</ol>
									) : (
										<p className="font-color">No experiences to show</p>
									)}
								</div>
							</div>
						</section>
			
						<section className="text-gray-600 body-font">
							<div className="container px-10 py-24 mx-auto">
								<h2 className="sm:text-3xl text-2xl font-bold title-font mb-5">
									Projects
								</h2>
								{profile.projects.length ? (
									<div className="container py-5 mx-auto">
										<div className="flex flex-wrap -m-4">
											{profile.projects.map((proj, index) => {
												return (
													<Project
														project={proj}
														key={index}
														itemIndex={index}
													/>
												);
											})}
										</div>
									</div>
								) : (
									<p className="font-color">No projects to show</p>
								)}
							</div>
						</section>
					</div> */}
				</>
			)}
		</>
	);
};

export default Company;
