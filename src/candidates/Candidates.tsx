import globeSVG from '../assets/globe.svg';
const Candidates = () => {
	return (
		<>
			<div className="p-4 lg:w-1/2">
				<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
					<img
						alt="team"
						className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
						src="https://dummyimage.com/200x200"
					/>
					<div className="flex-grow sm:pl-8">
						<h2 className="title-font font-medium text-lg text-indigo-500">
							Holden Caulfield
						</h2>
						<h3 className="text-slate-500 mb-3">UI Developer</h3>
						<p className="mb-4 font-color">
							DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
							vaporware.
						</p>
						<span className="inline-flex">
							<a className="text-gray-200">
								<img src={globeSVG} alt="globe" className='w-5' />
							</a>
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Candidates;
