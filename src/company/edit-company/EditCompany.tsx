import {
	setEdittingView,
	setJobs,
} from '../../store/features/company/companySlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import AddJobModal from '../jobs/AddJobModal';
import Job from '../jobs/Job';
import useEditForm from './useEditForm';

const EditCompany = () => {
	const dispatch = useAppDispatch();
	const { isEditting, company } = useAppSelector((state) => state.company);
	const { currentUser } = useAppSelector((state) => state.auth);
	const {
		formFields,
		handleInputChange,
		handleTextareaChange,
		handleUpdateCompany,
		isHiring,
		toggleHireCompany,
		openModal,
	} = useEditForm();

	const settingEditView = () => {
		dispatch(setEdittingView(!isEditting));
	};
	const removeItem = (id: number) => {
		const newJobs = company.jobs.filter((_, i) => i !== id);
		dispatch(setJobs(newJobs));
	};
	return (
		<>
			<section style={{ backgroundColor: '#252731' }}>
				<div className="container mx-auto py-5 text-right text-white flex justify-end">
					<div>
						<button
							onClick={handleUpdateCompany}
							className="mr-2 text-lg text-indigo-500"
						>
							Update
						</button>
						<button onClick={settingEditView}>Go Back</button>
					</div>
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
						<div>
							<div className="flex justify-center">
								<label
									htmlFor="toggle-example"
									className="flex items-center cursor-pointer relative mb-4"
								>
									<input
										onChange={toggleHireCompany}
										checked={isHiring}
										type="checkbox"
										id="toggle-example"
										className="sr-only"
									/>
									<div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
									<span className="ml-3 text-slate-200 text-md font-medium">
										Are you hiring?
									</span>
								</label>
							</div>
							<input
								className="font-color primary-bg-color input-border-color block w-full px-5 py-3 mt-2 text-base text-neutral-600 placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 apearance-none"
								id="companyUrl"
								value={formFields.companyUrl}
								onChange={handleInputChange}
								name="companyUrl"
								placeholder="Add company website"
							/>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="divide-y divide-gray-700">
					<section className="text-gray-600 body-font mt-2">
						<div className="container px-5 py-20 mx-auto">
							<div className="flex flex-col w-full mx-auto">
								<div className="w-full mx-auto">
									<h2 className="sm:text-3xl text-2xl my-5 font-bold">
										About the company
									</h2>
									<div>
										<textarea
											maxLength={4000}
											rows={6}
											className="font-color input-border-color secondary-bg-color block w-full px-5 py-3 mt-2 text-base text-neutral-600 placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 apearance-none autoexpand"
											id="companyDescription"
											name="companyDescription"
											value={formFields.companyDescription}
											onChange={handleTextareaChange}
											placeholder="Message..."
										></textarea>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="text-gray-600 body-font mt-2">
						<div className="container px-5 py-20 mx-auto">
							<div className="flex flex-col w-full mx-auto">
								<div className="w-full mx-auto">
									<h2 className="sm:text-3xl text-2xl my-5 font-bold">
										Company Size
									</h2>
									<div>
										<input
											className="font-color input-border-color secondary-bg-color block w-full px-5 py-3 mt-2 text-base text-neutral-600 placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 apearance-none autoexpand"
											id="companySize"
											name="companySize"
											value={formFields.companySize}
											onChange={handleInputChange}
											placeholder="e.g. 1-50"
										></input>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* Jobs starts */}
					<section className="text-gray-600 body-font">
						<div className="container px-5 py-24 mx-auto">
							<div className="text-left mb-5">
								<h2 className="sm:text-3xl text-2xl font-bold title-font mb-5">
									Jobs
								</h2>
								<button
									onClick={openModal}
									className="block text-white bg-indigo-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
									type="button"
									data-modal-toggle="defaultModal"
								>
									Add Job
								</button>
								<AddJobModal />
							</div>
							<p className='mb-5 font-color'>Be sure to <b>'Update'</b> for these changes to take effect :)</p>
							<div className="flex flex-wrap -m-4">
								{company.jobs.length
									? company.jobs.map((job, index) => {
											return (
												<Job
													job={job}
													key={index}
													itemIndex={index}
													removeItem={removeItem}
												/>
											);
									  })
									: null}
							</div>
						</div>
					</section>
				</div>
			</section>
		</>
	);
};

export default EditCompany;
