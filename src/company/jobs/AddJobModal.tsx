import React from 'react';
import { useAppSelector } from '../../store/hooks';
import useJobModal from './useJobModal';

const AddJobModal = () => {
	const { isModalOpen } = useAppSelector((state) => state.company);
	const { jobFields, addJobs, onInputChange, onTextareaChange, closeModal } =
		useJobModal();
	return (
		<div
			className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute right-0 bottom-0 left-0 h-screen"
			id="modal"
			style={{ display: `${isModalOpen ? 'block' : 'none'}`, top: '880px' }}
		>
			<div
				role="alert"
				className="container mx-auto w-11/12 md:w-2/3 max-w-4xl"
			>
				<div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
					<div className="w-full flex justify-center text-gray-600 mb-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-wallet"
							width="52"
							height="52"
							viewBox="0 0 24 24"
							strokeWidth="1"
							stroke="currentColor"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" />
							<path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
							<path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
						</svg>
					</div>
					<h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 text-center text-lg">
						Add Job
					</h1>
					<form onSubmit={addJobs}>
						<div className="w-full">
							<label
								htmlFor="description"
								className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
							>
								Job Description
							</label>
							<textarea
								required
								name="description"
								onChange={onTextareaChange}
								value={jobFields.description}
								maxLength={1000}
								id="description"
								className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full flex items-center px-3 py-3 text-sm border-gray-300 rounded border"
								placeholder="Job details..."
							/>
						</div>
						<div className="flex items-start">
							<div className="flex-1 mr-5">
								<label
									htmlFor="companyName"
									className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
								>
									Company Name
								</label>
								<input
									required
									name="companyName"
									onChange={onInputChange}
									value={jobFields.companyName}
									id="companyName"
									className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
									placeholder="Front-End Developer"
								/>
								<label
									htmlFor="title"
									className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
								>
									Position Title
								</label>
								<input
									required
									name="position"
									onChange={onInputChange}
									value={jobFields.position}
									id="position"
									className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
									placeholder="Front-End Developer"
								/>
								<label
									htmlFor="location"
									className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
								>
									Location
								</label>
								<input
									required
									name="location"
									onChange={onInputChange}
									value={jobFields.location}
									id="location"
									className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
									placeholder="Florida"
								/>
								<label
									htmlFor="date"
									className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
								>
									Date
								</label>
								<div className="relative mb-5 mt-2">
									<input
										type="date"
										required
										name="datePosted"
										onChange={onInputChange}
										value={jobFields.datePosted}
										id="datePosted"
										className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 pr-3 text-sm border-gray-300 rounded border"
									/>
								</div>
							</div>
							<div className="flex-1">
								<label
									htmlFor="salary"
									className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
								>
									Salary
								</label>
								<input
									required
									name="salary"
									onChange={onInputChange}
									value={jobFields.salary}
									id="salary"
									className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
									placeholder="70k"
								/>
								<label
									htmlFor="location"
									className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
								>
									Job Type
								</label>
								<input
									required
									name="jobType"
									onChange={onInputChange}
									value={jobFields.jobType}
									id="jobType"
									className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
									placeholder="full-time"
								/>
								<label
									htmlFor="applyUrl"
									className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
								>
									Apply URL
								</label>
								<input
									required
									name="applyUrl"
									onChange={onInputChange}
									value={jobFields.applyUrl}
									id="applyUrl"
									className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
									placeholder="www.example_applyhere@mail.com"
								/>
							</div>
						</div>
						<div className="flex items-center justify-start w-full">
							<button
								type="submit"
								className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
							>
								Submit
							</button>
							<button
								aria-label="close modal"
								type="button"
								onClick={closeModal}
								className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
							>
								Cancel
							</button>
						</div>
					</form>
					<button
						className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
						aria-label="close modal"
						onClick={closeModal}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-x"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							strokeWidth="2.5"
							stroke="currentColor"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" />
							<line x1="18" y1="6" x2="6" y2="18" />
							<line x1="6" y1="6" x2="18" y2="18" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddJobModal;
