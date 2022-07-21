import { useState } from 'react';
import { v4 } from 'uuid';
import { addCandidateToBoard } from '../../store/features/candidate/candidateSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const useManageCandidate = () => {
	const dispatch = useAppDispatch();
	const { board } = useAppSelector((state) => state.candidate);
	const [isCandidateAdded, setIsCandidateAdded] = useState(false);

	const addNewCandidateToBoard = (displayName) => {
		dispatch(
			addCandidateToBoard({
				...board,
				candidatesToReview: [
					{
						id: v4(),
						name: displayName,
						occupation: 'a developer',
						linkToProfile: 'https://www.google.com',
					},
					...board.candidatesToReview,
				],
			})
		);
	};
	const deleteItem = (columnName, draggableIndex) => {
		const newItems = [...board[columnName]];
		newItems.splice(draggableIndex, 1);
		dispatch(
			addCandidateToBoard({
				...board,
				[columnName]: [...newItems],
			})
		);
	};
	return { addNewCandidateToBoard, deleteItem, isCandidateAdded };
};

export default useManageCandidate;
