import React from 'react';
import Candidates from '../../candidates/Candidates';

interface CandidatesPageProps {}

const CandidatesPage: React.FC<CandidatesPageProps> = () => {
	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-col text-center w-full mb-20">
					<div className="input-group relative flex items-stretch w-2/3 mx-auto">
						<input
							// value={searchInput}
							// onChange={(e) => searchItems(e.target.value)}
							type="search"
							className="form-control relative flex-auto min-w-0 block w-full px-5 py-3 
							text-base font-normal text-slate-500 secondary-bg-color 
							bg-clip-padding border border-solid border-gray-300 
							rounded-full transition ease-in-out m-0 focus:text-slate-300 
							focus:secondary-bg-color focus:border-indigo-700 focus:outline-none"
							placeholder="Search for candidates..."
							aria-label="Search"
							aria-describedby="button-addon2"
						/>
					</div>
				</div>
				<div className="flex flex-wrap -m-4">
					<Candidates />
				</div>
			</div>
		</section>
	);
};

export default CandidatesPage;
