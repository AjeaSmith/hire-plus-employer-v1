import { useEffect } from 'react';
import { v4 } from 'uuid';
import {
	addCandidateToBoard,
	getAllCandidates,
} from '../../store/features/candidate/candidateSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const useTrelloBoard = () => {
	const dispatch = useAppDispatch();
	const { board, candidates } = useAppSelector((state) => state.candidate);

	useEffect(() => {
		dispatch(getAllCandidates());
	}, [dispatch]);

	const addNewCandidateToBoard = (displayName) => {
		const findCandidateInfo = candidates.length
			? candidates.find((val) => val.name === displayName)
			: '';
		dispatch(
			addCandidateToBoard({
				...board,
				candidatesToReview: [
					{
						id: v4(),
						name: displayName,
						occupation: findCandidateInfo.headline
							? findCandidateInfo.headline
							: null,
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
	
	return { addNewCandidateToBoard, deleteItem };
};

export default useTrelloBoard;
