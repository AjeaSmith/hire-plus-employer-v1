import { Droppable } from 'react-beautiful-dnd';
import ListItem from './ListItem';
import styled from 'styled-components';

const ColumnHeader = styled.div`
	// text-transform: uppercase;
	margin-bottom: 20px;
`;

const DroppableStyles = styled.div`
	padding: 10px;
	border-radius: 6px;
	background: white;
`;

const DraggableElement = ({ prefix, elements }) => (
	<DroppableStyles>
		<ColumnHeader>{prefix}</ColumnHeader>
		<Droppable droppableId={`${prefix}`}>
			{(provided) => (
				<div {...provided.droppableProps} ref={provided.innerRef}>
					{elements.map((item, index) => {
						return (
							<ListItem
								key={item.id}
								item={item}
								index={index}
								prefix={prefix}
							/>
						);
					})}
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	</DroppableStyles>
);

export default DraggableElement;
