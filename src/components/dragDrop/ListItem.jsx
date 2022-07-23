import { Draggable } from 'react-beautiful-dnd';
import {
	DragItem,
	CardHeader,
	CardFooter,
	Author,
	Avatar,
} from './styles/Styled';
import useManageCandidate from '../../candidates/manage-candidates/useManageCandidate';

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
						<span>{item.occupation}</span>
						<CardFooter>
							<span>{item.linkToProfile}</span>
							<Author>
								<Avatar src="https://picsum.photos/200" />
							</Author>
						</CardFooter>
					</DragItem>
				);
			}}
		</Draggable>
	);
};

export default ListItem;
