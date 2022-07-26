import { Draggable } from 'react-beautiful-dnd';
import { DragItem, CardHeader } from './styles/Styled';
import useManageCandidate from '../../candidates/manage-candidates/useTrelloBoard';

const ListItem = ({ item, index, prefix }) => {
	const { deleteItem } = useManageCandidate();
	return (
		<Draggable draggableId={item.id} index={index}>
			{(provided, snapshot) => {
				return (
					<DragItem
						onDoubleClick={() => deleteItem(prefix, index)}
						ref={provided.innerRef}
						snapshot={snapshot}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
					>
						<CardHeader>{item.name}</CardHeader>
						<span className='text-sm text-slate-300'>{item.occupation}</span>
					</DragItem>
				);
			}}
		</Draggable>
	);
};

export default ListItem;
