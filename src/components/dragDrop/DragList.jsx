import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import DraggableElement from './DraggableElement';
import useDropDrag from './useDropDrag';
import { useAppSelector } from '../../store/hooks';

const DragDropContextContainer = styled.div`
	padding: 20px;
`;

const ListGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 8px;
`;

function DragList() {
	const { board } = useAppSelector((state) => state.candidate);
	const { onDragEnd, lists } = useDropDrag();

	return (
		<DragDropContextContainer>
			<DragDropContext onDragEnd={onDragEnd}>
				<ListGrid>
					{lists.map((listKey) => (
						<DraggableElement
							elements={board[listKey]}
							key={listKey}
							prefix={listKey}
						/>
					))}
				</ListGrid>
			</DragDropContext>
		</DragDropContextContainer>
	);
}

export default DragList;
