import { DragDropContextContainer, ListGrid } from './styles/Styled';
import { DragDropContext } from 'react-beautiful-dnd';
import DraggableElement from './DraggableElement';
import useDropDrag from './useDropDrag';
import { useAppSelector } from '../../store/hooks';

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
