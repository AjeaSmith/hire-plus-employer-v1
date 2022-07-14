import { useEffect, useState } from 'react';
import { getAllCandidates } from '../store/features/candidate/candidateSlice';
import { CandidateData } from '../store/features/candidate/candidateTypes';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const useCandidate = () => {
	const dispatch = useAppDispatch();
	const { candidates, isLoading } = useAppSelector((state) => state.candidate);
	const [searchInput, setSearchInput] = useState<string>('');
	const [filteredData, setfilteredData] = useState<CandidateData[]>([]);

	useEffect(() => {
		dispatch(getAllCandidates());
	}, []);

	const filterUnqualifiedUsers = candidates.filter(
		(val) => val.headline !== '' || val.summary !== ''
	);
	const searchItems = (value: string) => {
		setSearchInput(value);
		if (searchInput !== '') {
			const filtered = candidates.filter((item) => {
				return Object.values(item)
					.join('')
					.toLowerCase()
					.includes(searchInput.toLowerCase());
			});
			setfilteredData(filtered);
		} else {
			setfilteredData(candidates);
		}
	};
	return {
		isLoading,
		filterUnqualifiedUsers,
		searchItems,
		searchInput,
		filteredData,
	};
};

export default useCandidate;
