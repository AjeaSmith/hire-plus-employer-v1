import _ from 'lodash';
import styled from 'styled-components';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import useManageCandidate from './useManageCandidate';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { addCandidateToBoard } from '../../store/features/candidate/candidateSlice';
import DragList from '../../components/dragDrop/DragList';

const DragDropContextContainer = styled.div`
	padding: 20px;

	border: 4px solid indianred;
	border-radius: 6px;
	display: grid;
	grid-template-columns: repeat(5, auto);
	grid-gap: 8px;
`;

const ColumnHeader = styled.div`
	text-transform: uppercase;
	margin-bottom: 20px;
`;

const DroppableStyles = styled.div`
	padding: 10px;
	border-radius: 6px;
	background: #d4d4d4;
`;

const CardHeader = styled.div`
	font-weight: 500;
`;

const CardFooter = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const DragItem = styled.div`
	padding: 10px;
	border-radius: 6px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	background: white;
	margin: 0 0 8px 0;
	display: grid;
	grid-gap: 20px;
	flex-direction: column;
`;

function ManageCandidates() {
	const dispatch = useAppDispatch();
	const { board } = useAppSelector((state) => state.candidate);
	// useEffect(() => {
	// 	dispatch(addCandidateToBoard(board));
	// }, [board, dispatch]);
	console.log('in board', board);
	return <DragList />;
}

export default ManageCandidates;
