import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import useManageCandidate from '../../candidates/manage-candidates/useManageCandidate';

const Avatar = styled.img`
	height: 30px;
	width: 30px;
	border: 3px solid white;
	border-radius: 50%;
`;

const CardHeader = styled.div`
	font-weight: 500;
`;

const Author = styled.div`
	display: flex;
	align-items: center;
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
