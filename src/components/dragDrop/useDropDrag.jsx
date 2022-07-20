import { useState } from 'react';
import { v4 } from 'uuid';
import { addCandidateToBoard } from '../../store/features/candidate/candidateSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const useDropDrag = () => {
	const dispatch = useAppDispatch();
	const { board } = useAppSelector((state) => state.candidate);

	const removeFromList = (list, index) => {
		const result = Array.from(list);
		const [removed] = result.splice(index, 1);
		return [removed, result];
	};

	const addToList = (list, index, element) => {
		const result = Array.from(list);
		result.splice(index, 0, element);
		return result;
	};

	const lists = [
		'candidatesToReview',
		'Interviewing',
		'notAMatch',
		'noResponse',
		'toBeHired',
	];

	const onDragEnd = ({ destination, source }) => {
		if (!destination) {
			return;
		}
		const listCopy = { ...board };

		const sourceList = listCopy[source.droppableId];

		const [removedElement, newSourceList] = removeFromList(
			sourceList,
			source.index
		);
		listCopy[source.droppableId] = newSourceList;

		const destinationList = listCopy[destination.droppableId];
		listCopy[destination.droppableId] = addToList(
			destinationList,
			destination.index,
			removedElement
		);

		dispatch(addCandidateToBoard(listCopy));
	};

	return { onDragEnd, lists };
};

export default useDropDrag;
