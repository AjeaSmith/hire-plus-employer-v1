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
			<button
				type="button"
				className="text-white
    			px-6
    			py-2.5
    			bg-indigo-600
    			text-white
    			font-medium
    			text-xs
    			leading-tight
    			uppercase
    			rounded
    			shadow-md
    			hover:bg-indigo-700 hover:shadow-lg
    			focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0
    			active:bg-blue-800 active:shadow-lg
    			transition
    			duration-150
    			ease-in-out
  				"
			>
				Save Board
			</button>
			<p className="text-sm text-slate-400 italic my-5">
				*Save board before exiting browser or logging out*
			</p>
			<p className="text-sm text-slate-400 italic mb-5">
				*Double-click to remove candidates from board*
			</p>
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
